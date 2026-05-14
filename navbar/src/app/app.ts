import {Component, ElementRef, ViewChild} from '@angular/core';
import {Clerk} from "@clerk/clerk-js";
import {environment} from "../environments/environment";

@Component({
    selector: 'navbar-club',
    imports: [],
    template: `
        <nav style="background: #fdd8e2; color: #ee0b6f; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; font-family: sans-serif;">
            <div style="font-weight: bold; font-size: 1.2rem;">🏊‍♂️ Club Clerk</div>
            <a style="font-weight: bold" href="/bassin">Entrée bassin</a>
            <a style="font-weight: bold" href="/bassin/inventaire">Besoin d'une planche ?</a>
            <a style="font-weight: bold" href="/muscu">Entrée salle de sport</a>
            <a style="font-weight: bold" href="/muscu/inventaire">Besoin d'altères ?</a>
            <div style="display: flex; align-items: center; gap: 20px;">
                <div #userButton></div>
            </div>
        </nav>
    `,
    styles: [],
})
export class App {
    @ViewChild('userButton', {static: true}) userButtonContainer!: ElementRef;

    // Remplace par ta "Publishable Key" Clerk
    private clerk = new Clerk(environment.clerkPublishableKey);

    // async ngOnInit() {
    //     await this.clerk.load();
    //
    //     if (this.clerk.user) {
    //         // Si l'utilisateur est là, on affiche le bouton "Profil"
    //         this.clerk.mountUserButton(this.userButtonContainer.nativeElement);
    //     } else {
    //         const currentUrl = window.location.href;
    //         const clerkSignInUrl = `https://charmed-tetra-60.clerk.accounts.dev/sign-in?redirect_url=${encodeURIComponent(currentUrl)}`;
    //         window.location.href = clerkSignInUrl;
    //     }
    // }
}
