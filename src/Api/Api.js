export const getAllSuperheroes= async () => {
    const res = await fetch('https://akabab.github.io/superhero-api/api/all.json')
    const json = await res.json()
    return json;
}