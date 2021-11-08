import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = {
    _id: number
    name: string
    priority: string
}
export type AffairType = Array<AffairPriorityType>

export type FilterType = 'all' | 'high' | 'low' | 'middle'


const defaultAffairs: AffairType = [ 
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): AffairType => {

    if (filter === 'all') return affairs
    else if (filter === 'high') return affairs.filter(el => el.priority === 'high')
    else if (filter === 'low') return affairs.filter(el => el.priority === 'low')
    else if (filter === 'middle') return affairs.filter(el => el.priority === 'middle')
    
    return affairs;
}
export const deleteAffair = (affairs: AffairType, _id: number): AffairType => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs) 

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) 

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
