import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'directors-studio',
    loadChildren: () => import('./features/directors-studio/directors-studio.routes').then(m => m.routes)
  },
  {
    path: 'cinematography-studio',
    loadChildren: () => import('./features/cinematography/cinematography.routes').then(m => m.routes)
  },
  {
    path: 'arabic-creative-writing',
    loadChildren: () => import('./features/creative-writing/creative-writing.routes').then(m => m.routes)
  },
  {
    path: 'prompt-engineering',
    loadChildren: () => import('./features/prompt-studio/prompt-studio.routes').then(m => m.routes)
  },
  {
    path: 'actorai',
    loadChildren: () => import('./features/actor-ai/actor-ai.routes').then(m => m.routes)
  },
  {
    path: 'editor',
    loadChildren: () => import('./features/editor/editor.routes').then(m => m.routes)
  },
  {
    path: 'analysis',
    loadChildren: () => import('./features/analysis/analysis.routes').then(m => m.routes)
  },
  {
    path: 'brainstorm',
    loadChildren: () => import('./features/brainstorm/brainstorm.routes').then(m => m.routes)
  },
  {
    path: 'breakdown',
    loadChildren: () => import('./features/breakdown/breakdown.routes').then(m => m.routes)
  },
  {
    path: 'development',
    loadChildren: () => import('./features/development/development.routes').then(m => m.routes)
  },
  {
    path: 'metrics',
    loadChildren: () => import('./features/metrics/metrics.routes').then(m => m.routes)
  },
  {
    path: 'new', // Dashboard / Main
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.routes)
  },
  {
    path: '',
    redirectTo: 'new',
    pathMatch: 'full'
  }
];
