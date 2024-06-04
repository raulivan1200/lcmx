import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { HistoriaComponent } from './historia/historia.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

export const routes: Routes = [
  // अपनी रूट्स यहाँ परिभाषित करें
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // URL खाली होने पर होम पर रीडायरेक्ट करें
  { path: 'home', component: HomepageComponent }, // होमपेज के लिए रूट
  { path: 'nosotros', component: HistoriaComponent }, // "हमारे बारे में" पेज के लिए रूट
  { path: 'servicios', component: ServiciosComponent }, // सेवाओं के पेज के लिए रूट
  { path: 'contacto', component: ReactiveFormValidationComponent }, // संपर्क पेज के लिए रूट
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // गोपनीयता नीति पेज के लिए रूट
  { path: 'terms-of-service', component: TermsOfServiceComponent }, // सेवा की शर्तें पेज के लिए रूट
  { path: '**', component: PageNotFoundComponent },  // 404 पेज के लिए वाइल्डकार्ड रूट

  // अपने एप्लिकेशन में अन्य घटकों के लिए और रूट्स जोड़ें
];
