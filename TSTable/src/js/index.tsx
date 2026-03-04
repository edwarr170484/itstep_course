/// <reference path="../../globals.d.ts" />

import {createRoot} from 'react-dom/client';
import Table from './components/Table';

const tableElement: HTMLElement = document.getElementById("table");

const root: any = createRoot(tableElement);

const products: Array<Product> = [
    {id: 1, name: "Товар 1", count: 10, price: 10},
    {id: 2, name: "Товар 2", count: 1, price: 123},
    {id: 3, name: "Товар 3", count: 44, price: 35},
    {id: 4, name: "Товар 4", count: 55, price: 567},
    {id: 5, name: "Товар 5", count: 65, price: 867},
    {id: 6, name: "Товар 6", count: 234, price: 4},
    {id: 7, name: "Товар 7", count: 6, price: 765},
    {id: 8, name: "Товар 8", count: 75, price: 45},
    {id: 9, name: "Товар 9", count: 178, price: 87},
    {id: 10, name: "Товар 10", count: 12, price: 2},
    {id: 11, name: "Товар 11", count: 43, price: 23},
    {id: 12, name: "Товар 12", count: 134, price: 54},
    {id: 13, name: "Товар 13", count: 234, price: 75},
    {id: 14, name: "Товар 14", count: 64564, price: 2},
    {id: 15, name: "Товар 15", count: 55, price: 456},
    {id: 16, name: "Товар 16", count: 546, price: 7},
    {id: 17, name: "Товар 17", count: 234, price: 45},
    {id: 18, name: "Товар 18", count: 86, price: 867},
    {id: 19, name: "Товар 19", count: 1, price: 34},
    {id: 20, name: "Товар 20", count: 0, price: 8}
];

root.render(<Table products={products} />);