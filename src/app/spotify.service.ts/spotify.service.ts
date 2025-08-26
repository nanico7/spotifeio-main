import { Injectable } from "@angular/core";
import { SpotifyConfiguration } from "../../enviroment/enviroment";

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {
    
    constructor() {}

    async obterUrlLogin(): Promise<string> {
        const codigoAleatorio = await this.gerarCodigoAleatorio();

        const authPoint = `${SpotifyConfiguration.authEndpoint}?`;
        const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
        const urlRedirection = `redirect_url=${SpotifyConfiguration.redirectUrl}&`;
        const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
        const codeChallengeMethod = 'code_challenge_method=S256';
        const codeChallangeParam = 'code_challenge' + codigoAleatorio + '&'; 
        const responseType = 'response_type=code';
        
        return `${authPoint}${clientId}${urlRedirection}${scopes}${codeChallengeMethod}${codeChallangeParam}${responseType}`;

    }

    async gerarCodigoAleatorio() {
        const codigoVerificador = this.gerarCodigoVerificador(128);
        const codChallenge = await this.generateCodeChallenge(codigoVerificador);

        localStorage.setItem('code_verifier', codigoVerificador);

        return codChallenge;
    }

    gerarCodigoVerificador(length: number) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    async generateCodeChallenge(codeVerifier: string) {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

     definirAcessToken(code : string) {
        const codigoVerificador = localStorage.getItem(key: 'code_verifier');
        const tokenEndpont :string = SpotifyConfiguration.apiTokenEndpoint;
    }

    const params = new URLSearchParams();
    params.append("client_id", SpotifyConfiguration.clientId);
    params.append("grant_type", value: "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", SpotifyConfiguration.redirectUrl);
    params.append("code_verifier", codigoVerificador!);

    try {
    const response:Response = await fetch(tokenEndpont, {
    method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
});
 const dados : any = await response.json();
 let acessToken : any = dados.access_token;

 if (acessToken) {
    alert("Login realizado com sucesso!");
} catch (error) {
    console.error("Error ao definir access token:", error);
   return false;
}
 }
