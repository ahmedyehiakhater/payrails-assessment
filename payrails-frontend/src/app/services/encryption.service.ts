
import { Injectable } from '@angular/core';
import * as jose from 'node-jose';
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  constructor() { }

  async encryptData(data: object, publicKeyString: string): Promise<string> {
    try {
      let pemKey = this.formatPublicKeyAsPEM(publicKeyString);
      const key = await this.importPublicKey(pemKey);
      const buffer = new TextEncoder().encode(JSON.stringify(data));
      const encrypted = await jose.JWE.createEncrypt(
        {
          format: 'compact',
          fields: {
            alg: 'RSA-OAEP-256', // Key encryption algorithm
            enc: 'A256CBC-HS512', // Content encryption algorithm
          },
        },
        key
      )
        .update(buffer)
        .final();
      return encrypted;
    } catch (error) {
      console.error('Encryption failed:', error);
      return '';
    }
  }
  /**
   * add key to keystore
   * @param pem 
   * @returns 
   */
  private async importPublicKey(pem: string): Promise<jose.JWK.Key> {
    const keystore = jose.JWK.createKeyStore();
    return keystore.add(pem, 'pem');
  }

  /**
   * Formats Public Key to PEM
   * @param publicKey 
   * @returns 
   */
  formatPublicKeyAsPEM(publicKey: string): string {
    const pemHeader = '-----BEGIN PUBLIC KEY-----';
    const pemFooter = '-----END PUBLIC KEY-----';

    const normalizedKey = publicKey
      .replace(/^-----BEGIN PUBLIC KEY-----/, '')
      .replace(/-----END PUBLIC KEY-----$/, '')
      .trim();

    return `${pemHeader}\n${normalizedKey}\n${pemFooter}`;
  }
}