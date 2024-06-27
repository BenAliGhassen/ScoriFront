import React from 'react'
import Table from 'react-bootstrap/Table';

function UserListe({ranking}) {
  return (
    <Table striped bordered hover size="sm">
        <thead>
        <tr>
    <td>
    Rank
    </td>
    <td>
    Nom
    </td>
    <td>
    Prenom
    </td>
    <td>
établissement 
    </td>
    <td>
    Score  
    </td>
  </tr>
        </thead>
        <tbody>
        {ranking.map((user, index) => (
  <tr key={index}>
    <td>{user.rank}</td>
    <td>{user.nom}</td>
    <td>{user.prenom}</td>
    <td>{user.etablisement}</td>
    <td>{parseFloat(user.score).toFixed(2)}</td>
  </tr>
))}
        </tbody>
        </Table>
  )
}

export default UserListe
