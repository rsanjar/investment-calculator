import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Calculator } from './features/calculator/components/calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculator, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
