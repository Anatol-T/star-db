<template>
  <div>
    <img
      className="planet-image"
      src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
      alt="planet"
    />
    <div>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Population</span>
          <span>{population}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Rotation Period</span>
          <span>{rotationPeriod}</span>
        </li>
        <li className="list-group-item">
          <span className="term">Diameter</span>
          <span>{diameter}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RandomPlanet",
};
</script>

<style scoped>
.random-planet {
  display: flex;
  padding: 1rem;
  border: 1px solid #444;
  margin-bottom: 1rem;
}

.random-planet .planet-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 1rem;
}

.random-planet .list-group {
  margin: 1rem 0 0 1rem;
}

.random-planet .list-group-item {
  padding: 0.25rem;
}

.random-planet .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
