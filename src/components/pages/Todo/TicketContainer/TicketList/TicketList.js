import React from 'React'

import TicketCard from './TicketCard'
import TIME from '~/src/utils/TIME'

const TicketList = (props) => {
  const tickets = [
    {
      id: '1',
      summary: '11111',
      category: 'work',
      deadline: TIME.fromUnix(1543733940)
    },
    {
      id: '2',
      summary: '222222',
      category: 'school',
      deadline: TIME.fromUnix(1543733933)
    },
    {
      id: '3',
      summary: '333333 yeah',
      category: 'home',
      deadline: TIME.fromUnix(1543793940)
    }
  ]

  return (
    <div>
      {
        tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))
      }
    </div>
  )
}

export default TicketList
