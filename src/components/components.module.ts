import { NgModule } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one';
import { ComponenTwoComponent } from './componen-two/componen-two';
@NgModule({
	declarations: [ComponentOneComponent,
    ComponenTwoComponent],
	imports: [],
	exports: [ComponentOneComponent,
    ComponenTwoComponent]
})
export class ComponentsModule {}
