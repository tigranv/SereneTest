﻿/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />

namespace SereneTest15._1.BasicSamples {

    /**
     * Subclass of CustomerGrid to override dialog type to SerialAutoNumberDialog
     */
    @Serenity.Decorators.registerClass()
    export class SerialAutoNumberGrid extends Northwind.CustomerGrid {

        protected getDialogType() { return SerialAutoNumberDialog; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}