import {useState} from "react";
import navItemsData from "../../../shop-ns-main/src/data/navItemsData.jsx";

export default function DropDownMobileMenu({links, selected}){
    const [submenuSelected, setSubmenuSelected] = useState(-1)
    const hasContainsGetLooks = navItemsData[selected]?.getLooks
    console.log("yo")

    function handleNestedSubMenuMouseEnter(id){
        setSubmenuSelected(id)
    }

    return (
        <div className={`bg-white text-sm min-w-full px-4 pt-10 pb-4`}>
            {/* main submenus */}
            <div className="mr-28">
                <ul className="space-y-3">
                    {links?.map((submenu, index) => (
                        <li key={index} className={index <= 1 ? "pb-2" : ""}>
                            <a
                                className={(index === 0 || index === links.length - 1) ? "text-red-500" : ""}
                                href={submenu.url}
                                onMouseEnter={()=> handleNestedSubMenuMouseEnter(submenu.id)}
                            >
                                {submenu.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* nested submenu */}
            {submenuSelected >= 0 && <NestedSubMenu submenuSelected={submenuSelected} links={links}/>}
            {(hasContainsGetLooks && submenuSelected < 0) && <GetTheLook hasContainsGetLooks={hasContainsGetLooks}/>}
        </div>
    );
}

function NestedSubMenu({links, submenuSelected}){
    const hasSubmenuCategories = links[submenuSelected]?.categories
    return(
        <div>
            {hasSubmenuCategories && <p className="pb-6 text-xs font-medium text-gray-500">CATEGORIES</p>}
            <ul className="h-[280px] flex gap-y-2 gap-x-8 flex-col flex-wrap">
                {links[submenuSelected]?.categories?.map(category => {
                    return(
                        <li key={category.id}>
                            <a className="text-xs" href={category.url}>{category.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function GetTheLook({hasContainsGetLooks}){
    return(
        <div>
            <div className="flex justify-between">
                <p className="text-sm">Get the look</p>
                <p className="text-xs font-medium">See everything</p>
            </div>
            <div className="flex gap-2">
                {hasContainsGetLooks?.map(look=> {
                    return(
                        <div key={look.id} className="relative cursor-pointer hover:bg-black/50">
                            <img className="h-[280px] w-[180px] object-cover opacity-80" src={look.image} alt=""/>
                            {/* hover */}
                            <div className="absolute h-full w-full bg-black/20 top-0">
                                <p className="absolute bottom-0 w-full text-white text-center p-4 font-semibold text-base">{look.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}