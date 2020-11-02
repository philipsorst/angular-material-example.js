import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found.component';
import {DragAndDropListComponent} from './examples/drag-and-drop-list/drag-and-drop-list.component';
import {DragAndDropDetailComponent} from './examples/drag-and-drop-list/drag-and-drop-detail.component';
import {ChipComponent} from './components/chip/chip.component';
import {TypographyComponent} from './typography/typography.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/typography', pathMatch: 'full'
    },
    {
        path: 'typography', component: TypographyComponent
    },
    {
        path: 'examples',
        children: [
            {
                path: 'drag-and-drop-list',
                children: [
                    {
                        'path': '',
                        component: DragAndDropListComponent
                    },
                    {
                        path: ':uuid',
                        component: DragAndDropDetailComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'components',
        children: [
            {
                path: 'chip',
                component: ChipComponent
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
