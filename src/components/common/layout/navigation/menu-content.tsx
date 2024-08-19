import { NavigationData } from "@/data/navigation.data";
import Link from "next/link";

const styles = {
  titleList: "font-medium hidden md:flex md:flex-row md:gap-8",
  link: "text-black hover:text-blue-600"
}

const MenuContent = () => {
  return (
    <div>
      <div className={styles.titleList}>
        {NavigationData.map((item, id) => (
          <Link className={styles.link} href={item.url} key={id}>
            {item.title}
          </Link>
        ))}
      </div>
    </div >
  )
}

export default MenuContent;
