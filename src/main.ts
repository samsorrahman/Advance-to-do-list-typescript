import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './Templat/ListTemplate'


const initApp = (): void =>{
    const fullist = FullList.instance
    const template= ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void =>{
        event.preventDefault()

        const input = document.getElementById("newItem")as HTMLInputElement
        const newEntryText: string = input.value.trim()

        if(!newEntryText.length) return

        const itemId: number = fullist.list.length
        ? parseInt(fullist.list[fullist.list.length -1].id)+1
        :1
        const newItem = new ListItem(itemId.toString(), newEntryText)
        fullist.addItem(newItem)
        template.render(fullist)
    })  

    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
    clearItems.addEventListener('click', (): void =>{
        fullist.clearList()
        template.clear()
    })

    fullist.load()
    template.render(fullist)
}
document.addEventListener("DOMContentLoaded", initApp)



