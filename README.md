# ApEnglish

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


### Suggested Folder Structure:

```
src/
│
└─── app/
│    │
│    └─── core/
│    │    └─── services/   # (Optional, if needed for managing global data or utilities)
│    │    └─── guards/     # (Optional, for route protection, if necessary)
│    │
│    └─── shared/
│    │    └─── components/ # (Re-usable UI components, if needed)
│    │    └─── pipes/      # (Custom pipes, if needed)
│    │    └─── models/     # (For types/interfaces, if applicable)
│    │
│    └─── pages/
│         └─── homepage/   # Homepage module and components
│         └─── kagglepage/ # Kaggle page module and components
│         └─── usacopage/  # Usaco page module and components
│         └─── apcsapage/  # Apcsa page module and components
│
└─── assets/  # Static files (images, fonts, etc.)
│
└─── environments/  # Environment configuration (not critical if no backend is involved)
```

### Explanation:
1. **`core/`**:
   - Even though your project doesn’t have a backend, you might still need utility services or guards for routing or shared data between components.
   
2. **`shared/`**:
   - Contains reusable components, pipes, or models that can be used across multiple pages, such as a header, footer, or any common UI elements.

3. **`pages/`**:
   - Each of your pages (homepage, kagglepage, usacopage, apcsapage) gets its own folder. This way, every page can have its own module and component(s), keeping everything modular and easy to manage.
   - Example: The `homepage/` folder will contain the `homepage.component.ts`, `homepage.module.ts`, and any other files related to the homepage.

