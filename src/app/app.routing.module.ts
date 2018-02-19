import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './home.component/home.component';
import { GalleryComponent }  from './gallery.component/gallery.component';
import { EnquiryComponent }  from './enquiry.component/enquiry.component';
import { ContactComponent }  from './contact.component/contact.component';


const routes : Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'enquiry', component: EnquiryComponent},
    {path: 'contact', component: ContactComponent},
    { path: '**', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule{}
export const RoutingComponents = [HomeComponent, GalleryComponent, EnquiryComponent, ContactComponent]