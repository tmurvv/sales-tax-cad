<h1>🧾 Canadian sales tax calculator</h1>

<p>
  <img src="https://github.com/MikeIbberson/sales-tax-cad/workflows/Node%20CI/badge.svg" alt="Status" />
<a href='https://coveralls.io/github/MikeIbberson/sales-tax-cad?branch=master'><img src='https://coveralls.io/repos/github/MikeIbberson/sales-tax-cad/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

<p>This package exports a single class. It's rather small and only does one thing: calculate CAD taxes. For those who just care about the total, you can call <code>sum</code>, as shown below, or you can get a tax trace using <code>get</code>.</p>

<p>Note that the constructor takes three arguments:</p>
<ol>
  <li>The two-letter province code;</li>
  <li>The taxable number value;</li>
  <li>The number of decimal points to include in output.</li>
</ol>

```javascript
  const SalesTax = require('sales-tax-cad');
  
  const tax = new SalesTax(
    'ON', // reference rates.json if unsure
    21.41, // ensure that this is a number
    2, // leave blank for raw result
  );

  tax.get(); // returns an array of all chargeable taxes
  tax.sum(); // returns the total payable tax
```

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>get</code></td>
      <td>Returns an array of applicable taxes</td>
    </tr>
    <tr>
      <td><code>get</code></td>
      <td>Returns the total payable tax (reduces <code>get</code> results)</td>
    </tr>
  </tbody>
</table>

<h2>Rate table</h2>
<table>
  <caption>As of February 1, 2020</caption>
  <thead>
    <tr>
      <th>Province</th>
      <th>Tax</th>
      <th>GST</th>
      <th>HST</th>
      <th>QST</th>
      <th>PST</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alberta</td>
      <td>GST</td>
      <td>5%</td>
      <td><span>--</span></td>
      <td><span>--</span></td>
      <td><span>--</span></td>
      <td>5%</td>
    </tr>
    <tr>
      <td>British Columbia</td>
      <td>GST + PST</td>
      <td>5%</td>
      <td>--</td>
      <td>--</td>
      <td>7%</td>
      <td>12%</td>
    </tr>
    <tr>
      <td>Manitoba</td>
      <td>GST + PST</td>
      <td>5%</td>
      <td>--</td>
      <td>--</td>
      <td>7%</td>
      <td>12%</td>
    </tr>
    <tr>
      <td>New Brunswick</td>
      <td>HST</td>
      <td>--</td>
      <td>15%</td>
      <td>--</td>
      <td>--</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Newfoundland and Labrador</td>
      <td>HST</td>
      <td>--</td>
      <td>15%</td>
      <td>--</td>
      <td>--</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Northwest Territories</td>
      <td>GST</td>
      <td>5%</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>5%</td>
    </tr>
    <tr>
      <td>Nova Scotia</td>
      <td>HST</td>
      <td>--</td>
      <td>15%</td>
      <td>--</td>
      <td>--</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Nunavut</td>
      <td>GST</td>
      <td>5%</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>5%</td>
    </tr>
    <tr>
      <td>Ontario</td>
      <td>HST</td>
      <td>--</td>
      <td>13%</td>
      <td>--</td>
      <td>--</td>
      <td>13%</td>
    </tr>
    <tr>
      <td>Prince Edward Island</td>
      <td>HST</td>
      <td>--</td>
      <td>15%</td>
      <td>--</td>
      <td>--</td>
      <td>15%</td>
    </tr>
    <tr>
      <td>Quebec</td>
      <td>GST + QST</td>
      <td>5%</td>
      <td>--</td>
      <td>9.975%</td>
      <td>--</td>
      <td>14.98%</td>
    </tr>
    <tr>
      <td>Saskatchewan </td>
      <td>GST + PST</td>
      <td>5%</td>
      <td>--</td>
      <td>--</td>
      <td>6%</td>
      <td>11%</td>
    </tr>
    <tr>
      <td>Yukon</td>
      <td>GST</td>
      <td>5%</td>
      <td>--</td>
      <td>--</td>
      <td>--</td>
      <td>5%</td>
    </tr>
  </tbody>
</table>
