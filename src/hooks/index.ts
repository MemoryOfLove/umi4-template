import { useIntl } from "umi"
/**
 * 
 * @returns 国际化翻译函数
 */
export const useTranslate=()=>{
    const intl=useIntl()
    const t=(key:string,params?:Record<string,any>)=>{
        return intl.formatMessage({id:key},params);
    }
    return t;
}