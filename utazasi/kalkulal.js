function szamol() {
    var letszam = document.getElementById('letszam').value;
    var ejszaka = document.getElementById('ejszaka').value;
    var orszag = document.getElementById('orszag').value;
    var fizetendo;

    //--számolás--
      if(orszag == "b")
		  fizetendo = 5600 * letszam * ejszaka;
	  else if(orszag == "g")
		  fizetendo = 6200 * letszam * ejszaka;
	  else if(orszag == "h")
		  fizetendo = 5000 * letszam * ejszaka;
	  else if(orszag == "t")
		  fizetendo = 5800 * letszam * ejszaka;
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}