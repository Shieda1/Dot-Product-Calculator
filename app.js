// https://www.omnicalculator.com/math/dot-product#what-is-the-dot-product-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const v6 = document.getElementById('v6');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dotproductRadio = document.getElementById('dotproductRadio');
const axRadio = document.getElementById('axRadio');
const ayRadio = document.getElementById('ayRadio');
const azRadio = document.getElementById('azRadio');
const bxRadio = document.getElementById('bxRadio');
const byRadio = document.getElementById('byRadio');
const bzRadio = document.getElementById('bzRadio');

let dotproduct;
let ax = v1;
let ay = v2;
let az = v3;
let bx = v4;
let by = v5;
let bz = v6;

// labels of thepust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');
const variable6 = document.getElementById('variable6');

dotproductRadio.addEventListener('click', function() {
  variable1.textContent = '(a) x';
  variable2.textContent = '(a) y';
  variable3.textContent = '(a) z';
  variable4.textContent = '(b) x';
  variable5.textContent = '(b) y';
  variable6.textContent = '(b) z';
  ax = v1;
  ay = v2;
  az = v3;
  bx = v4;
  by = v5;
  bz = v6;
  result.textContent = '';
});

axRadio.addEventListener('click', function() {
  variable1.textContent = 'Dot product';
  variable2.textContent = '(a) y';
  variable3.textContent = '(a) z';
  variable4.textContent = '(b) x';
  variable5.textContent = '(b) y';
  variable6.textContent = '(b) z';
  dotproduct = v1;
  ay = v2;
  az = v3;
  bx = v4;
  by = v5;
  bz = v6;
  result.textContent = '';
});

ayRadio.addEventListener('click', function() {
  variable1.textContent = 'Dot product';
  variable2.textContent = '(a) x';
  variable3.textContent = '(a) z';
  variable4.textContent = '(b) x';
  variable5.textContent = '(b) y';
  variable6.textContent = '(b) z';
  dotproduct = v1;
  ax = v2;
  az = v3;
  bx = v4;
  by = v5;
  bz = v6;
  result.textContent = '';
});

azRadio.addEventListener('click', function() {
  variable1.textContent = 'Dot product';
  variable2.textContent = '(a) x';
  variable3.textContent = '(a) y';
  variable4.textContent = '(b) x';
  variable5.textContent = '(b) y';
  variable6.textContent = '(b) z';
  dotproduct = v1;
  ax = v2;
  ay = v3;
  bx = v4;
  by = v5;
  bz = v6;
  result.textContent = '';
});

bxRadio.addEventListener('click', function() {
  variable1.textContent = 'Dot product';
  variable2.textContent = '(a) x';
  variable3.textContent = '(a) y';
  variable4.textContent = '(a) z';
  variable5.textContent = '(b) y';
  variable6.textContent = '(b) z';
  dotproduct = v1;
  ax = v2;
  ay = v3;
  az = v4;
  by = v5;
  bz = v6;
  result.textContent = '';
});

byRadio.addEventListener('click', function() {
  variable1.textContent = 'Dot product';
  variable2.textContent = '(a) x';
  variable3.textContent = '(a) y';
  variable4.textContent = '(a) z';
  variable5.textContent = '(b) x';
  variable6.textContent = '(b) z';
  dotproduct = v1;
  ax = v2;
  ay = v3;
  az = v4;
  bx = v5;
  bz = v6;
  result.textContent = '';
});

bzRadio.addEventListener('click', function() {
  variable1.textContent = 'Dot product';
  variable2.textContent = '(a) x';
  variable3.textContent = '(a) y';
  variable4.textContent = '(a) z';
  variable5.textContent = '(b) y';
  variable6.textContent = '(b) z';
  dotproduct = v1;
  ax = v2;
  ay = v3;
  az = v4;
  by = v5;
  bx = v6;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(dotproductRadio.checked)
    result.textContent = `Dot product = ${computeDotproduct().toFixed(2)}`;

  else if(axRadio.checked)
    result.textContent = `(a) x = ${computeAx().toFixed(2)}`;

  else if(ayRadio.checked)
    result.textContent = `(a) y = ${computeAy().toFixed(2)}`;

  else if(azRadio.checked)
    result.textContent = `(a) z = ${computeAz().toFixed(2)}`;

  else if(bxRadio.checked)
    result.textContent = `(b) x = ${computeBx().toFixed(2)}`;

  else if(byRadio.checked)
    result.textContent = `(b) y = ${computeBy().toFixed(2)}`;

  else if(bzRadio.checked)
    result.textContent = `(b) z = ${computeBz().toFixed(2)}`;
})

// calculation

function computeDotproduct() {
  return Number(ax.value) * Number(bx.value) + Number(ay.value) * Number(by.value) + Number(az.value) * Number(bz.value);
}

function computeAx() {
  return (Number(dotproduct.value) - (Number(ay.value) * Number(by.value)) - (Number(az.value) * Number(bz.value))) / Number(bx.value);
}

function computeAy() {
  return (Number(dotproduct.value) - (Number(ax.value) * Number(bx.value)) - (Number(az.value) * Number(bz.value))) / Number(by.value);
}

function computeAz() {
  return (Number(dotproduct.value) - (Number(ax.value) * Number(bx.value)) - (Number(ay.value) * Number(by.value))) / Number(bz.value);
}

function computeBx() {
  return (Number(dotproduct.value) - (Number(ay.value) * Number(by.value)) - (Number(az.value) * Number(bz.value))) / Number(ax.value);
}

function computeBy() {
  return (Number(dotproduct.value) - (Number(ax.value) * Number(bx.value)) - (Number(az.value) * Number(bz.value))) / Number(ay.value);
}

function computeBz() {
  return (Number(dotproduct.value) - (Number(ax.value) * Number(bx.value)) - (Number(ay.value) * Number(by.value))) / Number(az.value);
}