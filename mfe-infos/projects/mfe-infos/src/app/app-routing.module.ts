import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

    {
        path: '',
        redirectTo: 'infos',
        pathMatch: 'full'
    },

    {
        path: 'infos',
        loadChildren: () =>
            import('./infos/infos.module').then(
                (m) => m.InfosModule
            )

    },
    {
      path: 'cadastro',
      loadChildren: () =>
        import('./planos/planos.module').then((m) => m.PlanosModule),
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
