import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { InventoryComponent } from './components/inventory.component';
import { CartComponent } from './components/cart.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'cart', component: CartComponent},
];
