import {DataComponent} from "./DataComponent";
import {PeopleList} from "./PeopleList";

export const PeopleListPresenter =
       DataComponent(PeopleList, 'https://www.randomuser.me/api/?results=10');

