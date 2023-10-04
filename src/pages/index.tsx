import { useTranslate } from "@/hooks";
import { getLocale } from "umi";




export default function HomePage() {
  const t=useTranslate();
  console.log(getLocale())
  return (
    <div>
      <h2>{t('welcome')}</h2>
    </div>
  );
}
