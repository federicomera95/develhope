import { useMemo } from "react";

const FilteredList = ({list}) => {

    const filteredUsers = useMemo(() => list.filter((user) => user.age > 18),[list]);

    return(<ul>{filteredUsers === list && filteredUsers.map((user) => (<li key={Math.random()}>{user.name}</li>))}</ul>);
}

export default FilteredList;