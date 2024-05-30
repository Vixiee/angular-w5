import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FactComponent } from './app/fact/fact.component';
import { FactsComponent } from './app/facts/facts.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: FactComponent },
      { path: 'facts', component: FactsComponent },
    ]),
  ],
}).catch((err) => console.error(err));
