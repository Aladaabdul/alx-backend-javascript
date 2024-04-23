export default function getNeighborhoodsList() {
  const self = this;
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
