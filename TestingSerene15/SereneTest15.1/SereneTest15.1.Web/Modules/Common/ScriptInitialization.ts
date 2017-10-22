/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace SereneTest15._1.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('SereneTest15._1');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}