import { trim } from '../../utils/helpers'
import styles from './EventDetail.module.scss'

export default function ParticipantList({
  guestList,
  handleDelete,
  handleFinalize,
}) {
  return (
    <>
      <div
        className={
          guestList.length > 8
            ? styles.unsortedGuestsGrid
            : styles.unsortedGuests
        }
      >
        {guestList?.map((participant) => {
          return (
            <div key={participant.id}>
              <div className={styles.guestWrapper}>
                <p>{trim(participant.name)}</p>

                <button
                  onClick={() =>
                    handleDelete(participant.id, participant.event_id)
                  }
                  type='button'
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <button className={styles.drawBtn} onClick={handleFinalize} type='button'>
        Draw
      </button>
    </>
  )
}
