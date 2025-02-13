import { Injectable } from '@angular/core';
import { INgxTableColumn } from '../data-table/ngx-data-table/ngx-data-table.component';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    {link: '/', title: 'Dashboard', icon: 'home'},
    {link: '/user', title: 'User', icon: 'edit'},
    {link: '/product', title: 'Products', icon: 'archive'},
    {link: '/order', title: 'Order', icon: 'edit2'}
    // {link: '/k', title: 'Order', icon: 'edit2'}
  ];

  productTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'Name'},
    {key: 'description', title: 'Desc.'},
    {key: 'price', title: 'Price'},
    {key: 'active', title: 'Active'},
  ];

  userTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'username', title: 'Username'},
    {key: 'first_name', title: 'F.name'},
    {key: 'last_name', title: 'L.Name'},
    {key: 'email', title: 'Email'},
    {key: 'password', title: 'Password'},
    {key: 'role', title: 'Role'},
  ];

  constructor() { }
}
