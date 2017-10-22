namespace SereneTest15._1.Administration {
    export interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: { [key: string]: string };
    }
}

