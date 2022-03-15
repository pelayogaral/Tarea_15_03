import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from '../componente1/componente1.component';
import { Componente2Component } from '../componente2/componente2.component';
import { Componente3Component } from '../componente3/componente3.component';
import { Componente4Component } from '../componente4/componente4.component';
import { Componente5Component } from '../componente5/componente5.component';
import { IntroduccionComponent } from '../introduccion/introduccion.component';


const routes: Routes =
[
{
  path:'',
  component: IntroduccionComponent,
  pathMatch:'full'
},
{
  path:'componente1',
  component: Componente1Component
},
{
  path:'componente2',
  component: Componente2Component,
},
{
  path:'componente3',
  component: Componente3Component,
},
{
  path:'componente4',
  component: Componente4Component,
},
{
  path:'componente5',
  component: Componente5Component,
},
{
  path:'**',
  redirectTo:''
}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
