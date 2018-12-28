export const TextInput = ({ ...props }) => (
  <div className="Container">
    <input {...props} className="TextInput" />
    <style jsx>{`
      .Container {
        width: 100%;
      }

      .TextInput {
        width: 100%;
        padding: 1rem;
      }

      @media (min-width: 480px) {
        .TextInput {
          width: 440px;
        }
      }
    `}</style>
  </div>
);
