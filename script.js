window.addEventListener('load',async () => {
  const data1 = await fetchApiData('https://api.github.com/users/ndickers');
  const data2 = await fetchApiData('https://api.github.com/users/ifan3735');
  const data3 = await fetchApiData('https://api.github.com/users/victorNjeru49');
  const data4 = await fetchApiData('https://api.github.com/users/antosnizzah');
  // console.log(data4);

  console.log(data1.followers,data1.following, data2.followers,data2.following, data4);
  const followers1 = document.getElementById('followers1');
  const followers2 = document.getElementById('followers2');
  const followers3 = document.getElementById('followers3');
  const followers4 = document.getElementById('followers4');
  const following1 = document.getElementById('following1');
  const following2 = document.getElementById('following2');
  const following3 = document.getElementById('following3');
  const following4 = document.getElementById('following4');
  const public_repos1 = document.getElementById('public_repos1');
  const public_repos2 = document.getElementById('public_repos2');
  const public_repos3 = document.getElementById('public_repos3');
  const public_repos4 = document.getElementById('public_repos4');
  // const public_gists1 = document.getElementById('public_gists1');
  // const public_gists2 = document.getElementById('public_gists2');
  followers1.innerText = data1.followers;
  followers2.innerText = data2.followers;
  followers3.innerText = data3.followers;
  followers4.innerText = data4.followers;
  following1.innerText = data1.following;
  following2.innerText = data2.following;
  following3.innerText = data3.following;
  following4.innerText = data4.following;
  public_repos1.innerText = data1.public_repos;
  public_repos2.innerText = data2.public_repos;
  public_repos3.innerText = data3.public_repos;
  public_repos4.innerText = data4.public_repos;
  // public_gists1.innerText = data1.public_gists;
  // public_gists2.innerText = data2.public_gists;
  console.log(data1, data2);
  
});


const darkModeSwitch = document.getElementById('dark-mode-switch');
darkModeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.getElementById('theme')
  // console.log('theme');
  if (document.body.classList.contains('dark-mode')) {
    // console.log('Theme:', theme.innerText); 
    theme.innerText = 'Dark Mode';
    } else {
      theme.innerText = 'Light Mode';
    }
  }
);

// https://api.github.com/users/ndickers
async function fetchApiData(url){
  const response = await fetch(url)

  const data = await response.json();
  return data
}

fetchApiData();