import styles from './InvitePage.module.scss'

export default function InviteForm({ guestName, setGuestName, handleSubmit }) {
  return (
    <form className={styles.inviteForm} onSubmit={handleSubmit}>
      <label htmlFor='name'> </label>
      <input
        placeholder='Name'
        type='text'
        value={guestName}
        name='name'
        onChange={(event) => setGuestName(event.target.value)}
        pattern='[A-Za-z ]+'
        required
      />
      <button type='submit'>Create your wishlist →</button>
    </form>
  )
}
