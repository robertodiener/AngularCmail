import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaDeEntradaComponent } from './pages/caixa-de-entrada/caixa-de-entrada.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 //{path: 'cadastro', loadChildren : 'src/app/pages/cadastro/cadastro.module#CadastroModule'},
 {path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule)},
 //{path: '',loadChildren : 'src/app/pages/login/login.module#LoginModule'},
 {path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
 {path: 'inbox', component: CaixaDeEntradaComponent, canActivate: [AuthGuard]},
 {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers:[AuthGuard]
})

export class ModuloRoteamento{}
