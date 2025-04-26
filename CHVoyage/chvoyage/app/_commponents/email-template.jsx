import * as React from 'react';


export const EmailTemplate = ({data}) => (
  <div>
  <h1>Order</h1>

  <h2>Details:</h2>
  <ul>
  {data?.map((item, index) => (
    <li key={index}>
      {typeof item === 'object' ? (
        <div>
          {Object.entries(item).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      ) : (
        <strong>{item}</strong>
      )}
    </li>
  ))}
</ul>
</div>
);