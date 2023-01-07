import { trim } from '../../utils/helpers'
import styles from './EventDetail.module.scss'

const AssignedParticipantList = ({ guestList, handleDelete }) => {
  return (
    <div
      className={
        guestList.length > 3 ? styles.sortedGuestsGrid : styles.sortedGuests
      }
    >
      {guestList?.map((participant) => {
        return (
          <div key={participant.id} className={styles.assignedGuestWrapper}>
            <p>{trim(participant.name)}</p>

            <p className={styles.arrowThing}>→</p>
            <p>{trim(participant.gifter_id)}</p>

            <div>
              <button
                onClick={() =>
                  handleDelete(participant.id, participant.event_id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AssignedParticipantList
