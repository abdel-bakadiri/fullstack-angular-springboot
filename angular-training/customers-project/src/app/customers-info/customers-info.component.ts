import { Customer } from '../models/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-info',
  templateUrl: './customers-info.component.html',
  styleUrls: ['./customers-info.component.css'],
})
export class CustomersInfoComponent implements OnInit {
  cutomers: Customer[] = [
    new Customer('Salim', 'Slalmi', 'salim@gmail.com', 120),
    new Customer('Ahmed', 'Hmadi', 'ahmed@gmail.com', 140),
    new Customer('Brahim', 'Brahmi', 'brahim@gmail.com', 758),
    new Customer('Said', 'Saidi', 'said@gmail.com', 900),
    new Customer('Said', 'Saidi', 'said@gmail.com', 180),
    new Customer('Said', 'Saidi', 'said@gmail.com', 220),
    new Customer('Said', 'Saidi', 'said@gmail.com', 300),
  ];

  constructor() {}

  ngOnInit(): void {}
}
