import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBr from "./br.json";

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng:'pt-BR',
    resources:{
        'pt-BR': ptBr
    },
    react:{
        useSuspense:false,
    },
    interpolation:{
        escapeValue:false,
    }
})

export default i18n;