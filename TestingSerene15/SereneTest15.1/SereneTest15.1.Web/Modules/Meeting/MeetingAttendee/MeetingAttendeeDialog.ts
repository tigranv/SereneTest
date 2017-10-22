/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace SereneTest15._1.Meeting {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MeetingAttendeeDialog extends Common.GridEditorDialog<MeetingAttendeeRow> {
        protected getFormKey() { return MeetingAttendeeForm.formKey; }
        protected getIdProperty() { return MeetingAttendeeRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingAttendeeRow.localTextPrefix; }

        protected form = new MeetingAttendeeForm(this.idPrefix);
    }
}