import { trim } from '../../utils/helpers'
import styles from './EventDetail.module.scss'

const ParticipantList = ({ guestList, handleDelete, handleFinalize }) => {
  return (
    <>
      <div
        className={
          guestList.length > 8
            ? styles.unsortedGuestsGrid
            : styles.unsortedGuests
        }
      >
        {guestList?.map((participant, i) => {
          return (
            <div key={i}>
              <div className={styles.guestWrapper}>
                <p>{trim(participant.name)}</p>

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
      <button className={styles.drawBtn} onClick={handleFinalize}>
        Draw
      </button>
    </>
  )
}

export default ParticipantList
