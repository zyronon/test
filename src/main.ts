import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

//standalone模式
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
