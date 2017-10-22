/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace SereneTest15._1.BasicSamples {

    /**
     * Subclass of OrderGrid to override dialog type to OtherFormInTabDialog
     */
    @Serenity.Decorators.registerClass()
    export class OtherFormInTabGrid extends Northwind.OrderGrid {

        protected getDialogType() { return OtherFormInTabDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}