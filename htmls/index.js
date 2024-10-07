// cím
document.addEventListener('DOMContentLoaded', function () {
  const addressSelect = document.getElementById('address-select');
  const newAddressFields = document.getElementById('new-address-fields');
  const newAddressInput = document.getElementById('new-address');

  addressSelect.addEventListener('change', function () {
    if (addressSelect.value === 'new') {
      newAddressFields.style.display = 'block';
    } else {
      newAddressFields.style.display = 'none';
    }
  });

  document.getElementById('address-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const newAddress = newAddressInput.value.trim();
    if (newAddress !== "") {
      const newOption = document.createElement('option');
      newOption.value = newAddress;
      newOption.textContent = newAddress;
      addressSelect.appendChild(newOption);
      
      addressSelect.value = newAddress;

      newAddressFields.style.display = 'none';
      newAddressInput.value = ""; 
      const newUj = document.createElement('option');
      newUj.value = "new"
      newUj.id = "newoptionadd"
      newUj.innerHTML = "Új cím hozzáadása"
      addressSelect.removeChild(document.getElementById('newoptionadd'))
      addressSelect.appendChild(newUj)
    }
  });
});
//változók
let osszeg = 0;

function addItemToKajalista(name, ertek, mennyiseg) {
  let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
  kajalista.push({ name, ertek, mennyiseg });
  localStorage.setItem('ujkajalista', JSON.stringify(kajalista));
  console.log('Item added to kajalista and saved to localStorage');
}
function loadKajalista() {
  let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
  const tableBody = document.getElementById('tablazatbody'); 
  tableBody.innerHTML = '';

  kajalista.forEach((item, index) => {
    var tablerow = document.createElement('tr');
    var t1 = document.createElement("th");
    t1.innerHTML = item.name;
    var t2 = document.createElement("td");
    t2.innerHTML = item.ertek + " Ft";
    osszeg += item.ertek * item.mennyiseg;
    var t3 = document.createElement("td");
    t3.innerHTML = item.mennyiseg;
    var t4 = document.createElement("td");

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Törlés";
    deleteButton.id = "deletebutton";
    deleteButton.onclick = function() { removeItemFromKajalista(index); };

    t4.appendChild(deleteButton);

    tableBody.appendChild(tablerow);
    tablerow.appendChild(t1);
    tablerow.appendChild(t2);
    tablerow.appendChild(t3);
    tablerow.appendChild(t4);
  });
  document.getElementById('osszeg').innerText = osszeg;
  if (kajalista == null || kajalista == "") {
    var tablerow = document.createElement('tr');
    var ts1 = document.createElement("td");
    ts1.innerHTML = "Nincs semmi a kosaradban!";
    ts1.colSpan = "4";
    tableBody.appendChild(tablerow);
    tablerow.appendChild(ts1);
  }
}

function removeItemFromKajalista(index) {
  let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
  kajalista.splice(index, 1);
  localStorage.setItem('ujkajalista', JSON.stringify(kajalista));
  loadKajalista();
}
function removeAllItemsFromKajalista() {
  localStorage.removeItem('ujkajalista');
  loadKajalista();
}
function megrendeles() {
    let kajalista = JSON.parse(localStorage.getItem('ujkajalista')) || [];
    if (kajalista.length == 0) {
      alert("A kosár üres! Nem lehet rendelést leadni.");
    } else {
      localStorage.setItem('cim', document.getElementById('address-select').value)
      window.location.replace("success.html");
      removeAllItemsFromKajalista()
      alert("Sikeres megrendelés!")
    }
    
}
document.addEventListener("DOMContentLoaded", function() {
  loadKajalista();
});