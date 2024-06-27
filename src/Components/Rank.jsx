import UserListe from './UserListe'

function Rank({ranking}) {

  return (
    <div className='Ranking'>
  {ranking && <UserListe ranking={ranking} />}
    </div>
  )
}

export default Rank
