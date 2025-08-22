/*
  Class 9 Learning Website (Computer Systems)
  - Sidebar shows modules and subtopics (collapsed by default)
  - Clicking a module reveals its subtopics
  - Clicking a subtopic renders content and an image on the right
  - Includes basic search and deep-linking via URL hash
  - MCQ Quiz system with certification
*/

console.log('Script.js loaded successfully!');

// Data: Modules and Subtopics with concise learning content and an image each
const curriculum = [
  {
    id: "1.1",
    title: "Introduction to Computer Systems",
    subtopics: [
      {
        id: "1.1.1",
        title: "Definition and features of computer system",
        image: "",
        html: `
          <p><strong>Origin</strong>: The word <em>Computer</em> comes from the Latin word <em>computare</em>, meaning "to calculate."</p>
          <p><strong>Definition</strong>: A computer is an <em>electronic programmable device</em> that accepts raw data (input), processes it according to a given set of instructions (software/program), stores data and information for future use, and produces meaningful information (output).</p>

          <h3 class="h5 mt-3">Features of a Computer</h3>

          <h4 class="h6 mt-3">Automatic</h4>
          <ul>
            <li>Once instructions are given, a computer can perform tasks automatically.</li>
            <li>It controls connected devices (printers, scanners) without further human involvement.</li>
            <li><em>Example</em>: Printing 1000 pages without monitoring.</li>
          </ul>

          <h4 class="h6 mt-3">Speed</h4>
          <ul>
            <li>Works using binary signals (0 and 1) at extremely high speed.</li>
            <li>Performs millions of instructions per second (MIPS).</li>
            <li><em>Example</em>: Complex calculations that take hours for humans are done in seconds.</li>
          </ul>
          <img src="images/storage.png" alt="Speed illustration" class="img-fluid rounded shadow-sm my-2" />

          <h4 class="h6 mt-3">Accuracy</h4>
          <ul>
            <li>Produces correct results if input and instructions are correct.</li>
            <li>Errors usually occur due to wrong input (<strong>GIGO</strong> = Garbage In, Garbage Out) or due to hardware/software problems (<strong>bug</strong>).</li>
            <li>GIGO means incorrect input leads to incorrect output; a <em>bug</em> is an error caused by a fault in hardware or software.</li>
          </ul>

          <h4 class="h6 mt-3">Storage</h4>
          <ul>
            <li>Has large storage capacity for data, programs, and information.</li>
            <li>Stored on devices like HDD, SSD, optical discs, Blu‑ray, and pen drives.</li>
            <li>1 character = 1 byte.</li>
            <li>Common units: Byte → KB → MB → GB → TB → PB.</li>
            <li><em>Example</em>: A 1 TB drive can store thousands of movies and documents.</li>
          </ul>
          <img src="images/storage1.png" alt="Storage devices" class="img-fluid rounded shadow-sm my-2" />

          <h4 class="h6 mt-3">Diligence</h4>
          <ul>
            <li>Can perform tasks repeatedly without losing speed or accuracy over long periods.</li>
            <li>This capability is called <em>diligence</em>.</li>
            <li><em>Example</em>: ATM systems running 24/7.</li>
          </ul>

          <h4 class="h6 mt-3">Versatile</h4>
          <ul>
            <li>Capable of many tasks: calculation, document preparation, designing, research, entertainment, communication, and online transactions.</li>
            <li><em>Example</em>: The same computer can design an aircraft, edit a movie, and chat on social media.</li>
          </ul>
        `,
      },
      {
        id: "1.1.2",
        title: "Application areas of computer systems",
        image: "",
        html: `
          <img src="images/application.png" alt="Application areas" class="img-fluid rounded shadow-sm mb-2" />
          <h4 class="h6 mt-3">Education</h4>
          <ul>
            <li>Computers are widely used in the education sector for both teaching and learning.</li>
            <li>Students can study different subjects through educational websites and online resources.</li>
            <li>Teachers prepare lesson materials, presentations, and multimedia content with the help of computers.</li>
            <li>Schools use computers to maintain student records, prepare bills, and manage exam results efficiently.</li>
          </ul>

          <h4 class="h6 mt-3">Communication</h4>
          <ul>
            <li>Computers play a vital role in sharing information through the Internet.</li>
            <li>They enable services like email, video calls, instant messaging, and social media platforms (e.g., Facebook, Twitter, Instagram) to keep people connected worldwide.</li>
          </ul>

          <h4 class="h6 mt-3">Banking</h4>
          <ul>
            <li>Used to keep customer records and prepare bank statements.</li>
            <li>Online and mobile banking let people check balance, transfer money, and pay bills easily.</li>
            <li>Computers make banking safer and faster by reducing paperwork.</li>
          </ul>

          <h4 class="h6 mt-3">Medicine</h4>
          <ul>
            <li>Computers help doctors diagnose diseases and plan treatments.</li>
            <li>Medical imaging devices like X-rays, CT scans, and MRI machines use computers to create detailed images of the body.</li>
            <li>Hospitals use computers to manage patient records and schedule appointments.</li>
          </ul>

          <h4 class="h6 mt-3">Entertainment</h4>
          <ul>
            <li>Computers provide various forms of entertainment like games, movies, music, and social media.</li>
            <li>They enable people to watch videos, play games, and connect with friends online.</li>
            <li>Computers are used in creating movies, animations, and special effects.</li>
          </ul>
        `,
      },
      {
        id: "1.1.3",
        title: "Functions of a computer system",
        image: "",
        html: `
          <img src="images/ipos.png" alt="IPOS Cycle" class="img-fluid rounded shadow-sm mb-3" />
          <p>A computer system performs four basic functions known as the <strong>IPOS cycle</strong>:</p>
          
          <h4 class="h6 mt-3">1. Input</h4>
          <ul>
            <li>Data and instructions are entered into the computer through input devices.</li>
            <li>Examples: Keyboard, mouse, microphone, scanner, webcam.</li>
            <li>The computer accepts raw data in various forms (text, numbers, images, sound).</li>
          </ul>

          <h4 class="h6 mt-3">2. Process</h4>
          <ul>
            <li>The CPU processes the input data according to the given instructions.</li>
            <li>Performs calculations, comparisons, and logical operations.</li>
            <li>Converts raw data into meaningful information.</li>
          </ul>

          <h4 class="h6 mt-3">3. Output</h4>
          <ul>
            <li>The processed information is presented to the user through output devices.</li>
            <li>Examples: Monitor, printer, speakers, projectors.</li>
            <li>Results can be displayed, printed, or played as sound.</li>
          </ul>

          <h4 class="h6 mt-3">4. Storage</h4>
          <ul>
            <li>Data and programs are stored for future use.</li>
            <li>Primary storage (RAM) holds data temporarily during processing.</li>
            <li>Secondary storage (HDD, SSD) stores data permanently.</li>
          </ul>

          <div class="alert alert-info mt-3">
            <strong>Note:</strong> The IPOS cycle is continuous - output from one process can become input for another, creating a feedback loop.
          </div>
        `,
      }
    ]
  },
  {
    id: "1.2",
    title: "Input Devices",
    subtopics: [
      {
        id: "1.2.1",
        title: "Overview of input devices",
        image: "",
        html: `
          <p>Input devices are hardware tools used to input raw data and instructions into a computer system. These devices allow users to provide data for processing.</p>
          
          <h4 class="h6 mt-3">Mouse</h4>
          <img src="images/mouse.png" alt="Computer Mouse" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>The mouse is a popular handheld pointing input device used to interact with computers.</li>
            <li>It is primarily used for tasks such as pointing at objects, giving commands, and drawing or painting.</li>
            <li>A typical mouse has three buttons: the left button, the right button, and the scroll button.</li>
            <li>Users utilize these buttons for various actions such as clicking, double-clicking, right-clicking, dragging, and scrolling to communicate commands to the computer.</li>
          </ul>

          <h4 class="h6 mt-3">Keyboard</h4>
          <img src="images/keyboard.png" alt="Computer Keyboard" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>The keyboard is a popular input device used to enter data into the computer by typing.</li>
            <li>The most common keyboard layout is the "QWERTY" keyboard, named after the first six letters in the top row of keys.</li>
            <li>A standard keyboard consists of 104 keys. A multimedia keyboard has more than 104 keys.</li>
            <li>The keys on a keyboard are grouped into five different groups: Alphabet keys, Numeric keys, Cursor-movement keys, Functional keys and Special purpose key.</li>
          </ul>

          <h4 class="h6 mt-3">Joystick</h4>
          <img src="images/joystick.png" alt="Joystick" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A joystick is an input device commonly used for playing video games.</li>
            <li>It consists of a stick that can be moved in various directions and typically features additional buttons for controlling gameplay.</li>
          </ul>

          <h4 class="h6 mt-3">Microphone</h4>
          <img src="images/microphone.png" alt="Microphone" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A microphone is an input device used to capture sound and convert it into a digital format that a computer can process.</li>
            <li>It is widely used for voice chat and video conferencing via platforms such as Skype, Viber, Facebook Messenger, and others.</li>
          </ul>

          <h4 class="h6 mt-3">Scanner</h4>
          <img src="images/scanner.png" alt="Scanner" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A scanner is an input device designed to convert physical documents or drawings into a digital format.</li>
            <li>It functions by capturing images or text from a physical document and then transferring this data to the computer in a digital format.</li>
          </ul>

          <h4 class="h6 mt-3">Webcam</h4>
          <img src="images/webcam.png" alt="Webcam" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A webcam is a digital device that captures real-time video and audio.</li>
            <li>It is widely used for video conferencing, online streaming, content creation, remote work, online education, and social interactions.</li>
            <li>Webcams play a crucial role in connecting people through platforms like Zoom, Microsoft Teams, YouTube, and social media.</li>
          </ul>

          <h4 class="h6 mt-3">Touchscreen</h4>
          <img src="images/touchscreen.png" alt="Touchscreen" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A touchscreen is a display panel that is sensitive to touch, allowing users to interact directly with what is displayed on the screen.</li>
            <li>Initially popularized in smartphones, touch screens are now commonly found in laptops, notebooks, palmtops, and desktop computers.</li>
            <li>Users interact with touch screens by touching them with their fingers, allowing them to select objects on the screen and give commands to the computer system.</li>
          </ul>

          <h4 class="h6 mt-3">Touchpad</h4>
          <img src="images/touchpad.png" alt="Touchpad" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A touchpad is a touch-sensitive pad found in laptops, also called a Glide pad or trackpad.</li>
            <li>It acts like a mouse, letting users move the cursor by sliding their fingers.</li>
            <li>It usually has left and right buttons for clicking.</li>
          </ul>
        `,
      }
    ]
  },
  {
    id: "1.3",
    title: "Central Processing Unit (CPU)",
    subtopics: [
      {
        id: "1.3.1",
        title: "Function of the CPU",
        image: "",
        html: `
          <p>The Central Processing Unit (CPU), often referred to as the "brain of the computer," is the primary component within the processing unit. It is responsible for receiving data from the input unit, executing instructions provided by the user, and generating output information.</p>
          
          <img src="images/cpu.png" alt="CPU" class="img-fluid rounded shadow-sm mb-3" />
          
          <h4 class="h6 mt-3">CPU Functions</h4>
          <ul>
            <li><strong>Fetching:</strong> The CPU retrieves instructions or data from the computer's memory (RAM).</li>
            <li><strong>Decoding:</strong> The CPU interprets the fetched instructions to understand what actions are required.</li>
            <li><strong>Executing:</strong> The CPU performs the necessary actions, such as calculations, data movement, or interacting with other hardware.</li>
            <li><strong>Storing:</strong> The CPU stores the results of executed instructions back into memory or sends them to an output device.</li>
            <li><strong>Managing Interrupts:</strong> The CPU handles interruptions from other hardware or software, ensuring smooth and efficient processing.</li>
          </ul>
        `,
      },
      {
        id: "1.3.2",
        title: "Components of the CPU",
        image: "",
        html: `
          <p>The speed of a computer depends mainly on its microprocessor. The microprocessor has three main parts: Control Unit (CU), Arithmetic Logic Unit (ALU) and Memory Unit (Registers).</p>
          
          <img src="images/cpu-components.png" alt="CPU Components" class="img-fluid rounded shadow-sm mb-3" />
          
          <h4 class="h6 mt-3">Control Unit (CU)</h4>
          <ul>
            <li>The Control Unit controls the working of all parts of a computer.</li>
            <li>It controls the movement of data inside as well as outside the CPU.</li>
            <li>It communicates between registers and the ALU and between the CPU and all the input, output, and storage devices.</li>
            <li>It directs all the parts of the computer system to perform their tasks.</li>
          </ul>

          <h4 class="h6 mt-3">Arithmetic Logic Unit (ALU)</h4>
          <ul>
            <li>The Arithmetic Logic Unit (ALU) performs all arithmetic operations like addition, subtraction, multiplication, division.</li>
            <li>It also performs logical operations like greater than, less than, not equal, etc.</li>
          </ul>

          <h4 class="h6 mt-3">Memory Unit (Registers)</h4>
          <ul>
            <li>Registers are small memory units used to store immediate data, instructions, and results while processing data.</li>
          </ul>
        `,
      }
    ]
  },
  {
    id: "1.4",
    title: "Motherboard and Data Bus",
    subtopics: [
      {
        id: "1.4.1",
        title: "Explanation of the motherboard's role",
        image: "",
        html: `
          <p>The motherboard is known as the PCB (Printed Circuit Board), or system board, or main circuit board. It serves as the foundation of the computer system which hosts various components such as the microprocessor, slots, ports, and other essential chips.</p>
          
          <img src="images/motherboard.png" alt="Motherboard" class="img-fluid rounded shadow-sm mb-3" />
          
          <h4 class="h6 mt-3">Physical Connections</h4>
          <ul>
            <li>Sockets securely hold key components such as the CPU and RAM, ensuring they are properly aligned and connected.</li>
            <li>Expansion slots allow additional hardware, like graphics cards, network adapters, and other peripherals, to be added to the system.</li>
            <li>Dedicated ports are designed to connect external devices like monitors, keyboards, mice, and printers.</li>
          </ul>

          <h4 class="h6 mt-3">Electrical Connections</h4>
          <ul>
            <li>The Power Supply Unit (PSU) distributes power to all components through specific circuits and voltage regulators.</li>
            <li>Electrical signals travel through the motherboard's network of pathways, enabling data transfer and communication between components.</li>
          </ul>

          <h4 class="h6 mt-3">Communication Hub</h4>
          <ul>
            <li>Chipsets like the Southbridge and Northbridge manage communication between low-speed peripherals and high-speed components like the CPU and RAM.</li>
            <li>Internal buses such as PCIe and SATA serve as data transfer highways, connecting components and enabling fast data flow between them.</li>
          </ul>
        `,
      },
      {
        id: "1.4.2",
        title: "Understanding the data bus",
        image: "",
        html: `
          <p>Buses are connected lines or electronic pathways within a microprocessor chip that link its internal components. Data, address, and control are typically three types of buses in a microprocessor.</p>
          
          <img src="images/data-bus.png" alt="Data Bus" class="img-fluid rounded shadow-sm mb-3" />
          
          <h4 class="h6 mt-3">Data Bus</h4>
          <ul>
            <li>The data bus is a key communication pathway in a computer system, enabling the transfer of digital data between components like the CPU, memory, and peripherals.</li>
            <li>The data bus is composed of parallel lines, which allows for efficient and high-speed transfer of binary information (1s and 0s).</li>
            <li>The width of the data bus, measured in bits (such as 8-bit, 16-bit, 32-bit, 64-bit), determines how much data can be transferred at once.</li>
            <li>A wider data bus can carry more data in one go, leading to faster communication and better system performance.</li>
          </ul>

          <h4 class="h6 mt-3">Data Bus Functions</h4>
          <ul>
            <li><strong>Transferring Data:</strong> It facilitates the transfer of data between different components such as the CPU, RAM, hard drive, and peripherals.</li>
            <li><strong>Handling Different Data Types:</strong> Various types of buses manage different kinds of data and operate at varying speeds.</li>
          </ul>
        `,
      }
    ]
  },
  {
    id: "1.5",
    title: "Memory (Primary and Secondary)",
    subtopics: [
      {
        id: "1.5.1",
        title: "Definition and function of memory",
        image: "",
        html: `
          <p>Memory in a computer is used for storing data and information that the system needs to process and operate. There are various types of memory, each serving different purposes in the system.</p>
          
          <img src="images/memory.png" alt="Computer Memory" class="img-fluid rounded shadow-sm mb-3" />
          
          <ul>
            <li>It allows the computer to store information temporarily or permanently, enabling quick access to data when needed.</li>
          </ul>
        `,
      },
      {
        id: "1.5.2",
        title: "Units of memory measurement",
        image: "",
        html: `
          <p>Memory is measured in various units:</p>
          <ul>
            <li><strong>Bit:</strong> Smallest unit (0 or 1)</li>
            <li><strong>Byte:</strong> 8 bits</li>
            <li><strong>Kilobyte (KB):</strong> 1,024 bytes</li>
            <li><strong>Megabyte (MB):</strong> 1,024 KB</li>
            <li><strong>Gigabyte (GB):</strong> 1,024 MB</li>
            <li><strong>Terabyte (TB):</strong> 1,024 GB</li>
            <li><strong>Petabyte (PB):</strong> 1,024 TB</li>
          </ul>
        `,
      },
      {
        id: "1.5.3",
        title: "Types of memory: primary and secondary",
        image: "",
        html: `
          <p>The overall classification of computers can be done in two types: Primary memory and Secondary memory.</p>
          
          <h4 class="h6 mt-3">Primary Memory (Main Memory / Internal Memory)</h4>
          <ul>
            <li>Primary memory is a type of memory which is directly accessible by the CPU and stores data and instructions that the CPU needs while performing tasks.</li>
            <li>Primary memory is fast and plays a crucial role in running applications and services on the computer.</li>
            <li>Compared to secondary memory, primary memory has a relatively limited storage capacity.</li>
            <li>Types of primary memory: RAM (Random Access Memory) and ROM (Read Only Memory)</li>
          </ul>

          <h4 class="h6 mt-3">Secondary Memory (Storage devices or auxiliary or backup memory)</h4>
          <ul>
            <li>Secondary memory is a type of computer memory which stores data and instructions permanently for future use.</li>
            <li>It retains information even when the computer is turned off.</li>
            <li>Common types include magnetic tape, hard disks, SSDs (Solid State Drives), optical storage discs, and pen drives.</li>
          </ul>
        `,
      },
      {
        id: "1.5.4",
        title: "Example of primary memory: RAM, ROM, Cache, Register",
        image: "",
        html: `
          <h4 class="h6 mt-3">RAM (Random Access Memory)</h4>
          <img src="images/ram.png" alt="RAM" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>RAM is the volatile memory or short-term memory of a computer system, used for temporarily storing data and instructions during processing.</li>
            <li>It allows both reading and writing operations, meaning data can be read from and written to any physical location within it.</li>
            <li>Since RAM is volatile, the data it holds is erased when the power supply is turned off.</li>
            <li>Types: Static RAM (SRAM) and Dynamic RAM (DRAM)</li>
          </ul>

          <h4 class="h6 mt-3">ROM (Read-Only Memory)</h4>
          <img src="images/rom.png" alt="ROM" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>ROM is a type of computer memory that stores data permanently.</li>
            <li>The data in ROM can only be read and not easily changed or erased.</li>
            <li>It is non-volatile, meaning it keeps the data even when the computer is turned off.</li>
            <li>ROM is used to store important instructions, like the computer's startup process (BIOS).</li>
          </ul>

          <h4 class="h6 mt-3">Cache Memory</h4>
          <img src="images/cache.png" alt="Cache Memory" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Cache Memory is a small, high-speed memory located between the primary memory (RAM) and the CPU.</li>
            <li>It is used to store frequently accessed data and instructions during processing to help the CPU work faster.</li>
            <li>Cache memory is faster than RAM, but it has a smaller storage size.</li>
          </ul>

          <h4 class="h6 mt-3">CPU Registers</h4>
          <ul>
            <li>A CPU Register is a compact storage memory situated within the microprocessor that is distinguished by its high data transfer rate.</li>
            <li>It stores the data and instructions used by the microprocessor during its operation.</li>
          </ul>
        `,
      },
      {
        id: "1.5.5",
        title: "Example of secondary memory (Storage devices)",
        image: "",
        html: `
          <h4 class="h6 mt-3">Hard Disk Drive (HDD)</h4>
          <img src="images/hdd.png" alt="Hard Disk Drive" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A hard disk is a popular storage device that holds huge amounts of data permanently.</li>
            <li>It is built with aluminum materials and coated with a ferromagnetic element.</li>
            <li>Its surface consists of circular metal discs, or platters, which rotate while data is written or read.</li>
            <li>It offers large storage capacity and is measured in revolutions per minute (rpm) for speed, typically ranging from 5400 to 7200 rpm.</li>
          </ul>

          <h4 class="h6 mt-3">Solid State Drive (SSD)</h4>
          <img src="images/ssd.png" alt="Solid State Drive" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>SSD is a modern storage device that uses semiconductor chips to store data, providing faster performance compared to traditional hard disk drives (HDDs).</li>
            <li>Despite being more expensive, SSDs are preferred in devices like laptops, notebooks, and ultra books for their enhanced performance.</li>
            <li>SSDs are non-volatile, meaning they retain data even when the power is off.</li>
          </ul>

          <h4 class="h6 mt-3">Optical Storage Disc</h4>
          <img src="images/optical.png" alt="Optical Disc" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>An optical storage disc is a disc that uses laser light technology to store and retrieve data.</li>
            <li>The most commonly used optical storage discs are CDs, DVDs, Blu-ray disks, etc.</li>
            <li>CD storage capacity: 700MB</li>
            <li>DVD storage capacity: 4.7 GB to 17.08 GB (depending on layers)</li>
          </ul>

          <h4 class="h6 mt-3">Flash Memory</h4>
          <img src="images/flash.png" alt="Flash Memory" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Flash Memory is a type of non-volatile computer storage, meaning it retains data even when the power is turned off.</li>
            <li>It can be electrically erased and reprogrammed, making it highly versatile and efficient for use in various electronic devices.</li>
            <li>Flash memory is commonly found in USB drives, memory cards, SSDs, and other storage devices.</li>
          </ul>
        `,
      }
    ]
  },
  {
    id: "1.6",
    title: "Output Devices",
    subtopics: [
      {
        id: "1.6.1",
        title: "Overview of output devices",
        image: "",
        html: `
          <p>Output devices are essential components of a computer system, responsible for presenting processed data in a meaningful format to users. These devices convert digital information generated by the processing unit into human-readable forms.</p>
          
          <img src="images/output-devices.png" alt="Output Devices" class="img-fluid rounded shadow-sm mb-3" />
          
          <p>The primary output devices include monitors and printers, while other devices such as plotters, speakers, and headphones also serve specific output functions.</p>
        `,
      },
      {
        id: "1.6.2",
        title: "Display unit: LED and LCD Monitor",
        image: "",
        html: `
          <h4 class="h6 mt-3">Monitor (Visual Display Units - VDUs)</h4>
          <ul>
            <li>Monitors are essential output devices in computer systems, presenting processed data to users in the form of text, videos, and graphics.</li>
            <li>Output displayed on a monitor's screen is referred to as soft copy output.</li>
            <li>Monitors come in two main types based on color capabilities: monochrome and color monitors.</li>
          </ul>

          <h4 class="h6 mt-3">LED (Light Emitting Diode) Monitor</h4>
          <img src="images/led-monitor.png" alt="LED Monitor" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>LED monitors are a type of display technology commonly found in modern monitors, televisions, and other visual display devices.</li>
            <li>Unlike traditional LCD monitors that use fluorescent backlighting, LED monitors utilize light-emitting diodes to illuminate the screen.</li>
            <li>LED monitors are lighter, thinner, and more energy efficient than CRT and LCD monitors.</li>
            <li>They offer higher image quality, brightness, and color reproduction, making them ideal for long-term use.</li>
          </ul>

          <h4 class="h6 mt-3">LCD (Liquid Crystal Display) Monitor</h4>
          <img src="images/lcd-monitor.png" alt="LCD Monitor" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>LCD monitors utilize liquid crystal technology to display images on a screen.</li>
            <li>They are known for their lightweight, thin profile, and energy efficiency.</li>
            <li>These monitors consist of two layers of glass or plastic substrates containing liquid crystals that form an image when activated.</li>
            <li>Backlighting in LCD monitors is typically provided by fluorescent lamps.</li>
          </ul>
        `,
      },
      {
        id: "1.6.3",
        title: "Printer: Laser, Ink-jet, Dot-matrix and 3D Printer",
        image: "",
        html: `
          <h4 class="h6 mt-3">Printer</h4>
          <p>A printer is an output device that displays the data or information on the paper. There are mainly two types of printers: impact and non-impact printers.</p>

          <h4 class="h6 mt-3">Laser Printer</h4>
          <img src="images/laser-printer.png" alt="Laser Printer" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Laser printers utilize a laser beam to create an image on a photosensitive drum, which is then transferred onto the paper using toner (powdered ink).</li>
            <li>Laser printers are known for their fast printing speeds and crisp, professional-quality prints.</li>
            <li>They are often used in office environments for high-volume printing.</li>
          </ul>

          <h4 class="h6 mt-3">Ink-jet Printer</h4>
          <img src="images/inkjet-printer.png" alt="Ink-jet Printer" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Inkjet printers use liquid ink sprayed onto the paper to create text and images.</li>
            <li>They are known for their versatility and ability to produce high-resolution prints.</li>
            <li>Inkjet printers are commonly used for everyday printing tasks, such as documents, photos, and graphics.</li>
          </ul>

          <h4 class="h6 mt-3">Dot-matrix Printer</h4>
          <img src="images/dot-matrix.png" alt="Dot-matrix Printer" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A dot matrix printer is a type of impact printer.</li>
            <li>It features a print head containing numerous pins.</li>
            <li>When the print head strikes an inked ribbon, it creates dotted characters on the paper.</li>
            <li>Dot matrix printers offer a speed range of 50 to 400 CPS (Characters per second).</li>
          </ul>

          <h4 class="h6 mt-3">3D Printer</h4>
          <img src="images/3d-printer.png" alt="3D Printer" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>3D printers are a unique type of non-impact printer that builds three-dimensional objects layer by layer using various materials such as plastic, metal, or resin.</li>
            <li>They are commonly used in manufacturing, prototyping, and design industries to create prototypes, models, and custom parts.</li>
            <li>3D printers offer unparalleled flexibility and customization options for creating objects with complex details.</li>
          </ul>
        `,
      },
      {
        id: "1.6.4",
        title: "Overview of Ports: USB/Type C, HDMI, VGA, Ethernet, Audio port",
        image: "",
        html: `
          <h4 class="h6 mt-3">Hardware Ports</h4>
          <p>Hardware ports are sockets located on the exterior of the system unit that links to expansion boards. This architecture facilitates the connection of two devices by determining the design of the plug and socket, the types and purposes of wires involved, and the electrical signals transmitted across them.</p>

          <h4 class="h6 mt-3">USB Port</h4>
          <img src="images/usb-port.png" alt="USB Port" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>The Universal Serial Bus (USB) is used for short-distance digital data transfer.</li>
            <li>USB ports are versatile, allowing connection to a wide range of devices such as printers, cameras, keyboards, speakers, scanners, and mice.</li>
          </ul>

          <h4 class="h6 mt-3">Type C Port</h4>
          <img src="images/type-c.png" alt="Type C Port" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>The Type C port is a versatile connector found in many devices like phones and laptops.</li>
            <li>It's small and reversible, meaning you can plug it in either way.</li>
            <li>Type C supports fast charging, high-speed data transfer, and can connect to various accessories.</li>
          </ul>

          <h4 class="h6 mt-3">HDMI</h4>
          <img src="images/hdmi.png" alt="HDMI Port" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>The High Definition Multimedia Interface (HDMI) is a common interface for transmitting high-definition audio and video signals over a single cable.</li>
            <li>It is widely used to connect devices such as digital TVs, DVD players, Blu Ray players, gaming consoles, and AppleTV to televisions.</li>
          </ul>

          <h4 class="h6 mt-3">VGA Port</h4>
          <img src="images/vga.png" alt="VGA Port" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>The Video Graphics Array (VGA) port is a standard analog interface used to connect monitors, projectors, and other display devices to computers.</li>
            <li>It uses a 15 pin connector to carry analog signals for the red, green, and blue color channels (RGB), as well as horizontal and vertical synchronization signals.</li>
          </ul>

          <h4 class="h6 mt-3">Ethernet Port</h4>
          <img src="images/ethernet.png" alt="Ethernet Port" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Ethernet ports are used for wired local area networking (LAN), enabling devices to communicate within a network.</li>
            <li>Ethernet technology defines how data packets are transmitted over network cables and the protocols used for communication among networked devices.</li>
          </ul>

          <h4 class="h6 mt-3">Audio Port</h4>
          <img src="images/audio-port.png" alt="Audio Port" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Audio ports are essential for connecting audio devices such as headphones, microphones, speakers, and other audio equipment to electronic devices.</li>
            <li>These ports facilitate the transmission of analog audio signals between devices, allowing users to listen to audio output or record audio input.</li>
          </ul>
        `,
      }
    ]
  },
  {
    id: "1.7",
    title: "Computer Software",
    subtopics: [
      {
        id: "1.7.1",
        title: "Concept and its types",
        image: "",
        html: `
          <p>Computer software refers to a set of instructions, programs, or data that enable a computer to perform specific tasks or functions. It is a crucial component of a computer system, working in conjunction with hardware to provide a platform for various applications and user interactions.</p>
          
          <img src="images/software.png" alt="Computer Software" class="img-fluid rounded shadow-sm mb-3" />
          
          <h4 class="h6 mt-3">Types of Computer Software</h4>
          <ul>
            <li><strong>System Software</strong></li>
            <li><strong>Application Software</strong></li>
          </ul>

          <h4 class="h6 mt-3">System Software</h4>
          <ul>
            <li>System software serves as the backbone of computer operations, overseeing and supporting its functions.</li>
            <li>It acts as a vital bridge between users and computers, serving as a foundation for running different applications.</li>
            <li>It can be further categorized into operating systems, utility software, device drivers, and language processing software.</li>
          </ul>

          <h4 class="h6 mt-3">Application Software</h4>
          <ul>
            <li>Application software refers to programs tailored to meet specific user needs.</li>
            <li>This collection of programs is crafted to perform distinct tasks such as composing emails, editing photos, creating presentations, listening to music, engineering design, video editing, billing, and more.</li>
            <li>Packaged Software and Customized (or Tailored) Software are two types of application software.</li>
          </ul>
        `,
      },
      {
        id: "1.7.2",
        title: "Open sources and proprietary software",
        image: "",
        html: `
          <h4 class="h6 mt-3">Open Source Software</h4>
          <img src="images/open-source.png" alt="Open Source Software" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Open source software is a type of software that allows its source code to be publicly accessible.</li>
            <li>It means anyone can view, modify and use the code freely.</li>
            <li>Linux, Apache, Audacity, OpenOffice, Android and others are open source software.</li>
          </ul>

          <h4 class="h6 mt-3">Proprietary Software (Close Source Software)</h4>
          <img src="images/proprietary.png" alt="Proprietary Software" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Proprietary software is a type of software that does not allow its source to be accessed by any others except the creator or the authorized organization.</li>
            <li>The CSS usually comes with a license, and users are required to purchase the software to use it.</li>
            <li>This leads to higher costs and restrictions on the modification and usability of the software.</li>
            <li>Windows OS, Adobe Photoshop, iTunes, Microsoft Office Suite, AutoCAD, and many others are CSS.</li>
          </ul>
        `,
      },
      {
        id: "1.7.3",
        title: "Compare features of System and Application software",
        image: "",
        html: `
          <h4 class="h6 mt-3">System Software vs Application Software</h4>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>System Software</th>
                  <th>Application Software</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Purpose</strong></td>
                  <td>Manages and controls computer hardware</td>
                  <td>Performs specific user tasks</td>
                </tr>
                <tr>
                  <td><strong>Installation</strong></td>
                  <td>Pre-installed with the computer</td>
                  <td>Installed by users as needed</td>
                </tr>
                <tr>
                  <td><strong>Examples</strong></td>
                  <td>Operating System, Device Drivers, Utilities</td>
                  <td>Word Processors, Games, Web Browsers</td>
                </tr>
                <tr>
                  <td><strong>User Interface</strong></td>
                  <td>Command-line or basic GUI</td>
                  <td>User-friendly graphical interface</td>
                </tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        id: "1.7.4",
        title: "Introduction to Mobile and Web Application",
        image: "",
        html: `
          <h4 class="h6 mt-3">Mobile App</h4>
          <img src="images/mobile-app.png" alt="Mobile App" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>A computer program designed for a specific purpose is called an app or application.</li>
            <li>It is commonly installed on smartphones and tablets for various tasks.</li>
            <li>Mobile software includes apps and operating systems made for mobile devices like smartphones, tablets, and smartwatches.</li>
            <li>This software is designed to work with features like touchscreens, GPS, cameras, and mobile networks.</li>
            <li>It covers many types of apps, such as games, productivity tools, social media, and navigation apps.</li>
          </ul>

          <h4 class="h6 mt-3">Web Applications</h4>
          <img src="images/web-app.png" alt="Web Application" class="img-fluid rounded shadow-sm mb-2" />
          <ul>
            <li>Web applications are software programs that run on web servers and are used through web browsers over the internet.</li>
            <li>Unlike traditional desktop applications, they don't need to be installed on your device.</li>
            <li>You use them through a web page interface.</li>
            <li>Examples include email services like Gmail, online office tools like Google Docs, and social media sites like Facebook.</li>
            <li>Web applications are convenient because you can use them on any device with a web browser and an internet connection.</li>
          </ul>
        `,
      }
    ]
  }
];

// DOM elements - will be initialized after DOM loads
let topicsNav, contentInner, searchInput, sidebar, sidebarToggle;

// Build sidebar with modules (collapsed) and subtopics
function buildSidebar() {
  console.log('buildSidebar called with topicsNav:', topicsNav);
  if (!topicsNav) {
    console.error('topicsNav is null in buildSidebar!');
    return;
  }
  
  topicsNav.innerHTML = "";
  console.log('Building sidebar for', curriculum.length, 'modules');
  curriculum.forEach((module) => {
    const wrapper = document.createElement("div");
    wrapper.className = "mb-2";

    const header = document.createElement("div");
    header.className = "d-flex align-items-center";

    const btn = document.createElement("button");
    btn.className = "module-toggle rounded list-group-item list-group-item-action";
    btn.setAttribute("aria-expanded", "false");
    btn.dataset.moduleId = module.id;
    btn.innerHTML = `<span class="fw-semibold">${module.id} ${module.title}</span> <span class="chevron">▶</span>`;
    header.appendChild(btn);

    const list = document.createElement("div");
    list.className = "subtopics d-none";
    list.setAttribute("role", "group");

    module.subtopics.forEach((sub) => {
      const a = document.createElement("button");
      a.className = "list-group-item list-group-item-action border-0 ps-4";
      a.textContent = `${sub.id} ${sub.title}`;
      a.dataset.subtopicId = sub.id;
      a.addEventListener("click", () => handleSubtopicClick(module.id, sub.id, true));
      list.appendChild(a);
    });

    btn.addEventListener("click", () => toggleModule(list, btn));

    wrapper.appendChild(header);
    wrapper.appendChild(list);
    topicsNav.appendChild(wrapper);
  });
}

function toggleModule(listEl, btnEl) {
  const isHidden = listEl.classList.contains("d-none");
  if (isHidden) {
    listEl.classList.remove("d-none");
    btnEl.setAttribute("aria-expanded", "true");
    const chev = btnEl.querySelector(".chevron");
    if (chev) chev.classList.add("rotate");
  } else {
    listEl.classList.add("d-none");
    btnEl.setAttribute("aria-expanded", "false");
    const chev = btnEl.querySelector(".chevron");
    if (chev) chev.classList.remove("rotate");
  }
}

function handleSubtopicClick(moduleId, subtopicId, updateHash = false) {
  // Remove previous selection
  document.querySelectorAll(".subtopic-active").forEach((el) => el.classList.remove("subtopic-active"));

  // Set active on clicked item
  const activeBtn = document.querySelector(`[data-subtopic-id="${CSS.escape(subtopicId)}"]`);
  if (activeBtn) activeBtn.classList.add("subtopic-active");

  // Find content
  const module = curriculum.find((m) => m.id === moduleId);
  if (!module) return;
  const sub = module.subtopics.find((s) => s.id === subtopicId);
  if (!sub) return;

  // Render content
  const heroImg = sub.image ? `<img class="content-hero" style="max-width: 360px; width: 100%; height: auto;" src="${sub.image}" alt="${sub.title}" />` : "";
  contentInner.innerHTML = `
    <article>
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <div>
          <div class="text-muted small">${module.id} ${module.title}</div>
          <h2 class="h4 fw-bold m-0">${sub.id} ${sub.title}</h2>
        </div>
        ${heroImg}
      </div>
      ${sub.html}
    </article>
    
    <!-- MCQ Quiz Section for this topic -->
    <section class="mt-5 p-4 border rounded bg-light">
      <h4 class="mb-3">Test Your Knowledge</h4>
      <p>Now that you've learned about <strong>${sub.title}</strong>, test your understanding with our MCQ quiz!</p>
      <div class="row">
        <div class="col-md-6">
          <button class="btn btn-primary btn-lg w-100" onclick="showTopicMCQ('${moduleId}')">
            Take ${module.title} Quiz
          </button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-secondary btn-lg w-100" onclick="showMainPage()">
            Back to Main Page
          </button>
        </div>
      </div>
      <div id="quizContainer" class="mt-4"></div>
    </section>
  `;

  // Update URL hash if requested
  if (updateHash) {
    window.location.hash = `#${subtopicId}`;
  }
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const allButtons = topicsNav.querySelectorAll(".module-toggle, .subtopics button");

  allButtons.forEach((btn) => {
    const text = btn.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      btn.style.display = "block";
      // Show parent module if subtopic matches
      if (btn.classList.contains("subtopics")) {
        btn.closest(".mb-2").style.display = "block";
      }
    } else {
      btn.style.display = "none";
    }
  });
}

function openFromHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;

  // Find the subtopic
  for (const module of curriculum) {
    const subtopic = module.subtopics.find((s) => s.id === hash);
    if (subtopic) {
      // Ensure parent module is expanded
      const moduleWrapper = document.querySelector(`[data-module-id="${module.id}"]`).closest(".mb-2");
      const list = moduleWrapper.querySelector(".subtopics");
      const btn = moduleWrapper.querySelector(".module-toggle");
      
      if (list.classList.contains("d-none")) {
        list.classList.remove("d-none");
        btn.setAttribute("aria-expanded", "true");
        const chev = btn.querySelector(".chevron");
        if (chev) chev.classList.add("rotate");
      }
      
      handleSubtopicClick(module.id, subtopic.id, false);
      break;
    }
  }
}

function showSidebarMobile() {
  sidebar.classList.add("overlay");
  sidebar.classList.remove("d-none");
}

function hideSidebarMobile() {
  sidebar.classList.remove("overlay");
  sidebar.classList.add("d-none");
}

// Function to show main page content
function showMainPage() {
  console.log('showMainPage called');
  const container = document.getElementById('contentInner');
  console.log('Container element:', container);
  
  if (!container) {
    console.error('contentInner element not found!');
    return;
  }
  
  try {
    container.innerHTML = `
      <section class="mb-4">
        <h1 class="h3 fw-bold mb-2">Welcome to Class 9 Computer Systems</h1>
        <p class="text-secondary mb-3">Explore the modules on the left to learn about the parts of a computer, how they work together, and how software powers everything. Click a topic to reveal its subtopics, then choose any subtopic to read clear explanations with diagrams and examples.</p>
        <img class="img-fluid rounded shadow-sm" alt="Computer learning" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=60" />
      </section>
      
      <section class="alert alert-info">
        <div class="d-flex align-items-center gap-2">
          <span class="badge text-bg-primary">Tip</span>
          <div>Use the search box to quickly find any topic, e.g., "RAM", "Ports", or "IPOS".</div>
        </div>
      </section>
      
      <section class="mt-4 p-4 border rounded bg-light">
        <h4 class="mb-3">Test Your Knowledge</h4>
        <p>Ready to challenge yourself? Take our comprehensive MCQ quiz covering all topics in the Computer Systems module.</p>
        <button class="btn btn-primary btn-lg" onclick="showQuizIntro()">Start MCQ Quiz</button>
        <div id="quizContainer" class="mt-4"></div>
      </section>
    `;
    console.log('Main page content set successfully');
  } catch (error) {
    console.error('Error setting main page content:', error);
  }
}

// Function to generate certification questions
function generateCertificationQuestions() {
  const allQuestions = [];
  
  // Collect questions from all topics
  Object.values(mcqData).forEach(topic => {
    allQuestions.push(...topic.questions);
  });
  
  // Shuffle questions and select 100
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 100);
  
  // Ensure proper distribution (20 Knowledge, 20 Higher Ability, 30 Application, 30 Understanding)
  const knowledge = selected.filter(q => q.type === "Knowledge").slice(0, 20);
  const higherAbility = selected.filter(q => q.type === "Higher Ability").slice(0, 20);
  const application = selected.filter(q => q.type === "Application").slice(0, 30);
  const understanding = selected.filter(q => q.type === "Understanding").slice(0, 30);
  
  return [...knowledge, ...higherAbility, ...application, ...understanding];
}

// Function to show MCQ quiz introduction
function showQuizIntro() {
  console.log('showQuizIntro called');
  const container = document.getElementById('quizContainer');
  console.log('quizContainer found:', container);
  if (!container) {
    console.error('quizContainer not found!');
    return;
  }
  container.innerHTML = `
    <div class="card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">MCQ Quiz Selection</h5>
        <button class="btn btn-outline-primary btn-sm" onclick="showMainPage()">← Back to Main Page</button>
      </div>
      <div class="card-body">
        <p class="card-text">Choose a topic to test your knowledge:</p>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.1 Introduction to Computer Systems</h6>
                <p class="card-text small">20 questions covering computer systems basics, features, applications, and IPOS cycle.</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.1')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.2 Input Devices</h6>
                <p class="card-text small">20 questions covering mouse, keyboard, joystick, microphone, scanner, webcam, touchscreen, and touchpad.</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.2')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.3 Central Processing Unit (CPU)</h6>
                <p class="card-text small">20 questions covering CPU functions and components (Control Unit, ALU, Registers).</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.3')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.4 Motherboard and Data Bus</h6>
                <p class="card-text small">20 questions covering motherboard role and data bus importance.</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.4')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.5 Memory (Primary and Secondary)</h6>
                <p class="card-text small">20 questions covering RAM, ROM, Cache, HDD, SSD, and memory types.</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.5')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.6 Output Devices</h6>
                <p class="card-text small">20 questions covering monitors, printers, and hardware ports.</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.6')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-body text-center">
                <h6 class="card-title">1.7 Computer Software</h6>
                <p class="card-text small">20 questions covering system software, application software, and mobile/web apps.</p>
                <button class="btn btn-primary" onclick="showTopicMCQ('1.7')">Start Quiz</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100 border-warning">
              <div class="card-body text-center">
                <h6 class="card-title text-warning">🏆 Certification Exam</h6>
                <p class="card-text small">100 comprehensive questions from all topics. Score 90% or above to earn your certificate!</p>
                <button class="btn btn-warning" onclick="showCertificationIntro()">Start Certification</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-3">
          <h6>Question Types in Each Quiz:</h6>
          <ul class="small">
            <li><strong>Knowledge Level (5 questions):</strong> Basic facts and definitions</li>
            <li><strong>Application Level (5 questions):</strong> Real-world usage scenarios</li>
            <li><strong>Understanding Level (5 questions):</strong> Concepts and relationships</li>
            <li><strong>Higher Ability Level (5 questions):</strong> Analysis and problem-solving</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// Function to show certification intro
function showCertificationIntro() {
  const container = document.getElementById('quizContainer');
  
  container.innerHTML = `
    <div class="card">
      <div class="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">🏆 Computer Systems Certification Exam</h5>
        <button class="btn btn-outline-dark btn-sm" onclick="showQuizIntro()">← Back to Quiz Selection</button>
      </div>
      <div class="card-body">
        <div class="alert alert-warning">
          <h6>📋 Exam Requirements:</h6>
          <ul class="mb-0">
            <li><strong>100 questions</strong> covering all topics from 1.1 to 1.7</li>
            <li><strong>90% or above</strong> required to earn certification</li>
            <li><strong>No time limit</strong> - take your time to think</li>
            <li><strong>Certificate</strong> will be generated upon successful completion</li>
          </ul>
        </div>
        
        <div class="row mb-3">
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-primary">Knowledge</h6>
              <small class="text-muted">20 questions</small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-success">Application</h6>
              <small class="text-muted">30 questions</small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-warning">Understanding</h6>
              <small class="text-muted">30 questions</small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-info">Higher Ability</h6>
              <small class="text-muted">20 questions</small>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <button class="btn btn-warning btn-lg" onclick="startQuiz('certification')">Start Certification Exam</button>
          <button class="btn btn-secondary ms-2" onclick="showQuizIntro()">Back to Quiz Selection</button>
        </div>
      </div>
    </div>
  `;
}

// Function to show MCQ questions after each topic
function showTopicMCQ(topicId) {
  const container = document.getElementById('quizContainer');
  const topicData = mcqData[topicId];
  
  if (!topicData) {
    // Handle topics without MCQ data
    container.innerHTML = `
      <div class="card">
        <div class="card-header bg-secondary text-white d-flex justify-content-between align-items-center">
          <h5 class="card-title mb-0">Quiz Not Available</h5>
          <button class="btn btn-outline-light btn-sm" onclick="showQuizIntro()">← Back to Quiz Selection</button>
        </div>
        <div class="card-body text-center">
          <p class="card-text">MCQ quiz for this topic is coming soon!</p>
          <button class="btn btn-secondary" onclick="showQuizIntro()">View Available Quizzes</button>
        </div>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <div class="card">
      <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 class="card-title mb-0">${topicData.title} - MCQ Quiz</h5>
        <button class="btn btn-outline-light btn-sm" onclick="showQuizIntro()">← Back to Quiz Selection</button>
      </div>
      <div class="card-body">
        <p class="card-text">Test your knowledge on ${topicData.title} with ${topicData.questions.length} comprehensive questions.</p>
        <div class="row mb-3">
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-primary">Knowledge</h6>
              <small class="text-muted">${topicData.questions.filter(q => q.type === "Knowledge").length} questions</small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-success">Application</h6>
              <small class="text-muted">${topicData.questions.filter(q => q.type === "Application").length} questions</small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-warning">Understanding</h6>
              <small class="text-muted">${topicData.questions.filter(q => q.type === "Understanding").length} questions</small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="text-center">
              <h6 class="text-info">Higher Ability</h6>
              <small class="text-muted">${topicData.questions.filter(q => q.type === "Higher Ability").length} questions</small>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-lg" onclick="startQuiz('${topicId}')">Start ${topicData.title} Quiz</button>
        <button class="btn btn-secondary ms-2" onclick="showQuizIntro()">View All Quiz Topics</button>
      </div>
    </div>
  `;
}

// MCQ Data for all topics
const mcqData = {
  "1.1": {
    title: "Introduction to Computer Systems",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What does the word 'Computer' mean in Latin?",
        options: ["To calculate", "To process", "To store", "To display"],
        correct: 0,
        explanation: "The word 'Computer' comes from the Latin word 'computare', meaning 'to calculate'."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "Which of the following is NOT a feature of computers?",
        options: ["Speed", "Accuracy", "Emotions", "Storage"],
        correct: 2,
        explanation: "Computers do not have emotions. They are logical machines that process data based on instructions."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "What does GIGO stand for in computing?",
        options: ["Good Input, Good Output", "Garbage In, Garbage Out", "Great Information, Great Output", "General Input, General Output"],
        correct: 1,
        explanation: "GIGO means Garbage In, Garbage Out - incorrect input leads to incorrect output."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "Which memory unit is the largest?",
        options: ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"],
        correct: 3,
        explanation: "Terabyte is larger than Gigabyte, which is larger than Megabyte, which is larger than Kilobyte."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "What is the IPOS cycle in computer systems?",
        options: ["Input, Process, Output, Storage", "Input, Process, Output, System", "Input, Process, Output, Software", "Input, Process, Output, Screen"],
        correct: 0,
        explanation: "IPOS stands for Input, Process, Output, Storage - the basic functions of a computer system."
      },
      {
        id: 6,
        type: "Application",
        question: "A farmer wants to monitor crop health from above. Which computer application would be most suitable?",
        options: ["GPS navigation", "Drone with cameras", "Weather forecasting", "Online banking"],
        correct: 1,
        explanation: "Drones with cameras are used in agriculture to monitor fields and check plant health from above."
      },
      {
        id: 7,
        type: "Application",
        question: "Which computer application is best for a doctor to diagnose diseases?",
        options: ["Word processor", "Medical imaging software", "Spreadsheet", "Web browser"],
        correct: 1,
        explanation: "Medical imaging software helps doctors analyze X-rays, CT scans, and MRI images for diagnosis."
      },
      {
        id: 8,
        type: "Application",
        question: "A student wants to create a presentation for class. Which computer application should they use?",
        options: ["Spreadsheet", "Presentation software", "Database", "Video editor"],
        correct: 1,
        explanation: "Presentation software like PowerPoint is designed specifically for creating slideshows and presentations."
      },
      {
        id: 9,
        type: "Application",
        question: "Which computer application is most suitable for online shopping?",
        options: ["E-commerce website", "Word processor", "Photo editor", "Music player"],
        correct: 0,
        explanation: "E-commerce websites are specifically designed for online shopping and transactions."
      },
      {
        id: 10,
        type: "Application",
        question: "A company needs to manage customer records. Which computer application would be most appropriate?",
        options: ["Database management system", "Video game", "Music player", "Photo editor"],
        correct: 0,
        explanation: "Database management systems are designed to store, organize, and manage large amounts of data like customer records."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why do computers need both primary and secondary memory?",
        options: ["To look more expensive", "To store different types of data", "To balance speed and capacity", "To use more electricity"],
        correct: 2,
        explanation: "Primary memory (RAM) is fast but limited, while secondary memory (HDD/SSD) provides large capacity. Together they balance speed and storage needs."
      },
      {
        id: 12,
        type: "Understanding",
        question: "How does the IPOS cycle work in a computer system?",
        options: ["It works only once", "It works continuously in a loop", "It works only when turned on", "It works only for specific tasks"],
        correct: 1,
        explanation: "The IPOS cycle works continuously - output from one process can become input for another, creating a feedback loop."
      },
      {
        id: 13,
        type: "Understanding",
        question: "Why are computers considered versatile machines?",
        options: ["Because they are expensive", "Because they can do many different tasks", "Because they are large", "Because they use electricity"],
        correct: 1,
        explanation: "Computers are versatile because they can perform many different types of tasks from calculations to entertainment to communication."
      },
      {
        id: 14,
        type: "Understanding",
        question: "What is the relationship between input and output in a computer system?",
        options: ["They are the same thing", "Input becomes output after processing", "They are unrelated", "Output becomes input"],
        correct: 1,
        explanation: "Input data is processed by the computer and then becomes output information that is presented to the user."
      },
      {
        id: 15,
        type: "Understanding",
        question: "Why is computer accuracy important in applications like banking?",
        options: ["To make transactions faster", "To ensure correct calculations and records", "To save money", "To look professional"],
        correct: 1,
        explanation: "Accuracy is crucial in banking to ensure that all financial calculations and records are correct and reliable."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If a computer processes 1 million instructions per second, how long would it take to process 5 million instructions?",
        options: ["1 second", "5 seconds", "0.2 seconds", "0.5 seconds"],
        correct: 1,
        explanation: "5 million instructions ÷ 1 million instructions per second = 5 seconds."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A computer has 8GB RAM and 1TB storage. If 2GB of data is being processed, where would it be stored?",
        options: ["Only in RAM", "Only in storage", "In both RAM and storage", "In neither RAM nor storage"],
        correct: 0,
        explanation: "Data being actively processed is stored in RAM for fast access, not in secondary storage."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If a computer can store 1 character per byte, how many characters can be stored in 1KB?",
        options: ["100 characters", "1,000 characters", "1,024 characters", "10,000 characters"],
        correct: 2,
        explanation: "1KB = 1,024 bytes, and since 1 character = 1 byte, 1KB can store 1,024 characters."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A computer processes data at 2.5 GHz. How many cycles per second does it perform?",
        options: ["2.5 million", "2.5 billion", "2.5 trillion", "2.5 thousand"],
        correct: 1,
        explanation: "2.5 GHz means 2.5 billion cycles per second (GHz = gigahertz = billion cycles per second)."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a computer has 16GB RAM and is running 4 applications that each use 2GB, how much RAM is still available?",
        options: ["8GB", "4GB", "0GB", "16GB"],
        correct: 0,
        explanation: "4 applications × 2GB each = 8GB used. 16GB total - 8GB used = 8GB available."
      }
    ]
  },
  "1.2": {
    title: "Input Devices",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What is the most common keyboard layout?",
        options: ["QWERTY", "AZERTY", "DVORAK", "COLEMAK"],
        correct: 0,
        explanation: "QWERTY is the most common keyboard layout, named after the first six letters in the top row."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "How many buttons does a typical mouse have?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "A typical mouse has three buttons: left button, right button, and scroll button."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "What type of input device is a joystick primarily used for?",
        options: ["Typing", "Video games", "Drawing", "Scanning"],
        correct: 1,
        explanation: "Joysticks are primarily used for playing video games and controlling gameplay."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "What does a microphone convert sound into?",
        options: ["Digital format", "Analog format", "Text format", "Image format"],
        correct: 0,
        explanation: "A microphone converts sound into a digital format that a computer can process."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "What is a touchpad also called?",
        options: ["Mouse pad", "Glide pad", "Track pad", "Slide pad"],
        correct: 1,
        explanation: "A touchpad is also called a Glide pad or trackpad."
      },
      {
        id: 6,
        type: "Application",
        question: "Which input device would be best for a graphic designer to draw digital artwork?",
        options: ["Keyboard", "Mouse", "Graphics tablet", "Scanner"],
        correct: 2,
        explanation: "A graphics tablet allows precise drawing and is ideal for digital artwork creation."
      },
      {
        id: 7,
        type: "Application",
        question: "A teacher wants to show physical documents to students online. Which input device should they use?",
        options: ["Webcam", "Scanner", "Microphone", "Touchscreen"],
        correct: 1,
        explanation: "A scanner can convert physical documents into digital format for online sharing."
      },
      {
        id: 8,
        type: "Application",
        question: "Which input device is most suitable for a person with limited mobility?",
        options: ["Keyboard", "Mouse", "Touchscreen", "Joystick"],
        correct: 2,
        explanation: "Touchscreens are more accessible for people with limited mobility as they don't require precise hand movements."
      },
      {
        id: 9,
        type: "Application",
        question: "A musician wants to record their voice for a song. Which input device should they use?",
        options: ["Webcam", "Microphone", "Scanner", "Touchpad"],
        correct: 1,
        explanation: "A microphone is specifically designed to capture audio input like voice recording."
      },
      {
        id: 10,
        type: "Application",
        question: "Which input device would be best for a gamer playing flight simulation games?",
        options: ["Mouse", "Keyboard", "Joystick", "Scanner"],
        correct: 2,
        explanation: "A joystick provides the most realistic control for flight simulation games."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why do computers need input devices?",
        options: ["To look more expensive", "To receive data and instructions from users", "To display information", "To store data"],
        correct: 1,
        explanation: "Input devices allow users to provide data and instructions to the computer for processing."
      },
      {
        id: 12,
        type: "Understanding",
        question: "How does a touchscreen work as an input device?",
        options: ["It uses buttons", "It uses voice commands", "It responds to touch", "It uses a mouse"],
        correct: 2,
        explanation: "Touchscreens respond to touch input, allowing users to interact directly with what is displayed on the screen."
      },
      {
        id: 13,
        type: "Understanding",
        question: "Why is a keyboard considered a versatile input device?",
        options: ["Because it's expensive", "Because it can input many types of data", "Because it's wireless", "Because it's colorful"],
        correct: 1,
        explanation: "A keyboard can input text, numbers, symbols, and commands, making it versatile for various tasks."
      },
      {
        id: 14,
        type: "Understanding",
        question: "What is the advantage of using a webcam for video conferencing?",
        options: ["It's cheaper than other devices", "It captures both video and audio in real-time", "It doesn't need internet", "It works without software"],
        correct: 1,
        explanation: "Webcams capture real-time video and audio, making them ideal for video conferencing."
      },
      {
        id: 15,
        type: "Understanding",
        question: "How does a scanner differ from a camera as an input device?",
        options: ["Scanners are cheaper", "Scanners are designed for documents and flat objects", "Scanners are wireless", "Scanners are faster"],
        correct: 1,
        explanation: "Scanners are specifically designed to capture high-quality images of documents and flat objects, unlike cameras which can capture any scene."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If a keyboard has 104 keys and each key press sends 1 byte of data, how much data is sent when typing a 10-character word?",
        options: ["10 bytes", "104 bytes", "1 byte", "100 bytes"],
        correct: 0,
        explanation: "Each character typed sends 1 byte, so 10 characters = 10 bytes of data."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A mouse moves 100 pixels horizontally and 50 pixels vertically. What is the total distance moved?",
        options: ["150 pixels", "111.8 pixels", "50 pixels", "200 pixels"],
        correct: 1,
        explanation: "Using the Pythagorean theorem: √(100² + 50²) = √(10,000 + 2,500) = √12,500 ≈ 111.8 pixels."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If a scanner captures an image at 300 DPI and the document is 8.5 x 11 inches, how many pixels will the image have?",
        options: ["2,550 x 3,300 pixels", "300 x 300 pixels", "8.5 x 11 pixels", "2,550 x 3,300 DPI"],
        correct: 0,
        explanation: "300 DPI × 8.5 inches = 2,550 pixels width, 300 DPI × 11 inches = 3,300 pixels height."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A microphone samples audio at 44.1 kHz. How many samples are taken per second?",
        options: ["44.1", "441", "4,410", "44,100"],
        correct: 3,
        explanation: "44.1 kHz = 44,100 Hz = 44,100 samples per second."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a touchscreen has a resolution of 1920x1080 and detects a touch at coordinates (960, 540), where is the touch located?",
        options: ["Top-left corner", "Center of screen", "Bottom-right corner", "Top-right corner"],
        correct: 1,
        explanation: "(960, 540) is exactly the center of a 1920x1080 screen (1920÷2=960, 1080÷2=540)."
      }
    ]
  },
  "1.3": {
    title: "Central Processing Unit (CPU)",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What is the CPU often referred to as?",
        options: ["The heart of the computer", "The brain of the computer", "The memory of the computer", "The power of the computer"],
        correct: 1,
        explanation: "The CPU is often referred to as the 'brain of the computer' because it controls all operations."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "How many main parts does a microprocessor have?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "A microprocessor has three main parts: Control Unit (CU), Arithmetic Logic Unit (ALU), and Memory Unit (Registers)."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "What does ALU stand for?",
        options: ["Arithmetic Logic Unit", "Advanced Logic Unit", "Arithmetic Learning Unit", "Advanced Learning Unit"],
        correct: 0,
        explanation: "ALU stands for Arithmetic Logic Unit, which performs mathematical and logical operations."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "What does CU stand for in CPU components?",
        options: ["Control Unit", "Central Unit", "Computer Unit", "Calculation Unit"],
        correct: 0,
        explanation: "CU stands for Control Unit, which controls the working of all parts of a computer."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "What are the small memory units in CPU called?",
        options: ["RAM", "ROM", "Registers", "Cache"],
        correct: 2,
        explanation: "Registers are small memory units used to store immediate data, instructions, and results while processing data."
      },
      {
        id: 6,
        type: "Application",
        question: "When a user clicks a button, which CPU function is most likely happening first?",
        options: ["Executing", "Fetching", "Decoding", "Storing"],
        correct: 1,
        explanation: "Fetching happens first - the CPU retrieves the instruction about what to do when a button is clicked."
      },
      {
        id: 7,
        type: "Application",
        question: "A computer needs to add two numbers. Which CPU component will perform this task?",
        options: ["Control Unit", "Arithmetic Logic Unit", "Registers", "Cache"],
        correct: 1,
        explanation: "The Arithmetic Logic Unit (ALU) performs all arithmetic operations like addition, subtraction, multiplication, and division."
      },
      {
        id: 8,
        type: "Application",
        question: "Which CPU function involves understanding what an instruction means?",
        options: ["Fetching", "Decoding", "Executing", "Storing"],
        correct: 1,
        explanation: "Decoding involves interpreting the fetched instructions to understand what actions are required."
      },
      {
        id: 9,
        type: "Application",
        question: "When a program needs to compare two values, which CPU component handles this?",
        options: ["Control Unit", "Arithmetic Logic Unit", "Registers", "Memory"],
        correct: 1,
        explanation: "The ALU performs logical operations like greater than, less than, not equal, etc."
      },
      {
        id: 10,
        type: "Application",
        question: "Which CPU function saves the result of a calculation?",
        options: ["Fetching", "Decoding", "Executing", "Storing"],
        correct: 3,
        explanation: "Storing involves saving the results of executed instructions back into memory or sending them to an output device."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why is the CPU called the brain of the computer?",
        options: ["Because it's expensive", "Because it controls all operations", "Because it's large", "Because it uses electricity"],
        correct: 1,
        explanation: "The CPU is called the brain because it controls and coordinates all the computer's operations, just like a brain controls the body."
      },
      {
        id: 12,
        type: "Understanding",
        question: "How do the three main parts of CPU work together?",
        options: ["They work independently", "They work in sequence", "They work randomly", "They don't work together"],
        correct: 1,
        explanation: "The three parts work together in sequence: Control Unit manages, ALU processes, and Registers store data temporarily."
      },
      {
        id: 13,
        type: "Understanding",
        question: "What is the relationship between CPU speed and computer performance?",
        options: ["No relationship", "Faster CPU means better performance", "Slower CPU means better performance", "CPU speed doesn't matter"],
        correct: 1,
        explanation: "Generally, a faster CPU means better computer performance as it can process more instructions per second."
      },
      {
        id: 14,
        type: "Understanding",
        question: "Why do computers need registers in the CPU?",
        options: ["To look more expensive", "To store data temporarily during processing", "To connect to the internet", "To display images"],
        correct: 1,
        explanation: "Registers store data temporarily during processing for quick access, which is essential for efficient CPU operation."
      },
      {
        id: 15,
        type: "Understanding",
        question: "What happens during the 'Managing Interrupts' function of CPU?",
        options: ["Nothing important", "CPU handles interruptions from other hardware or software", "CPU stops working", "CPU gets faster"],
        correct: 1,
        explanation: "Managing interrupts ensures smooth and efficient processing by handling interruptions from other hardware or software."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If a CPU processes at 3.2 GHz, how many cycles does it perform per second?",
        options: ["3.2 million", "3.2 billion", "3.2 trillion", "3.2 thousand"],
        correct: 1,
        explanation: "3.2 GHz = 3.2 billion cycles per second (GHz = gigahertz = billion cycles per second)."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A CPU has 8 registers and each can store 64 bits. How much data can all registers hold together?",
        options: ["64 bits", "512 bits", "8 bits", "128 bits"],
        correct: 1,
        explanation: "8 registers × 64 bits each = 512 bits total storage capacity."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If a CPU takes 2 clock cycles to fetch, 1 to decode, 3 to execute, and 1 to store, how many cycles for one instruction?",
        options: ["5 cycles", "6 cycles", "7 cycles", "8 cycles"],
        correct: 2,
        explanation: "2 + 1 + 3 + 1 = 7 clock cycles for one complete instruction cycle."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A CPU processes 4 billion instructions per second. How many instructions can it process in 0.5 seconds?",
        options: ["2 billion", "4 billion", "8 billion", "1 billion"],
        correct: 0,
        explanation: "4 billion instructions per second × 0.5 seconds = 2 billion instructions."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a CPU has 16 registers and each instruction uses 2 registers, how many instructions can be processed simultaneously?",
        options: ["8 instructions", "16 instructions", "32 instructions", "2 instructions"],
        correct: 0,
        explanation: "16 registers ÷ 2 registers per instruction = 8 instructions can be processed simultaneously."
      }
    ]
  },
  "1.4": {
    title: "Motherboard and Data Bus",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What is another name for the motherboard?",
        options: ["Main board", "PCB", "System board", "All of the above"],
        correct: 3,
        explanation: "The motherboard is also called PCB (Printed Circuit Board), system board, or main circuit board."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "What is the motherboard often referred to as?",
        options: ["The heart of the computer", "The backbone of the computer", "The brain of the computer", "The memory of the computer"],
        correct: 1,
        explanation: "The motherboard is often referred to as the 'backbone' of the computer because it connects all components."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "How many types of buses are typically in a microprocessor?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "There are typically three types of buses: data, address, and control buses."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "What does PCB stand for?",
        options: ["Printed Circuit Board", "Personal Computer Board", "Processor Circuit Board", "Power Circuit Board"],
        correct: 0,
        explanation: "PCB stands for Printed Circuit Board, which is another name for the motherboard."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "What is the main function of the data bus?",
        options: ["To provide power", "To transfer data", "To display images", "To connect to internet"],
        correct: 1,
        explanation: "The main function of the data bus is to transfer digital data between components."
      },
      {
        id: 6,
        type: "Application",
        question: "A user wants to add a graphics card to their computer. Where would they install it?",
        options: ["In the CPU", "In the RAM", "In an expansion slot on the motherboard", "In the power supply"],
        correct: 2,
        explanation: "Graphics cards are installed in expansion slots on the motherboard, which allow additional hardware to be added."
      },
      {
        id: 7,
        type: "Application",
        question: "Which component would connect a keyboard to the motherboard?",
        options: ["USB port", "CPU socket", "RAM slot", "Power connector"],
        correct: 0,
        explanation: "A keyboard connects to the motherboard through a USB port, which is a dedicated port for external devices."
      },
      {
        id: 8,
        type: "Application",
        question: "What would happen if the motherboard was damaged?",
        options: ["Only the monitor would stop working", "The entire computer would stop working", "Only the keyboard would stop working", "Nothing would happen"],
        correct: 1,
        explanation: "If the motherboard is damaged, the entire computer would stop working because it's the central connection point for all components."
      },
      {
        id: 9,
        type: "Application",
        question: "Which bus would be used to transfer data from RAM to CPU?",
        options: ["Address bus", "Data bus", "Control bus", "Power bus"],
        correct: 1,
        explanation: "The data bus is used to transfer actual data between components like RAM and CPU."
      },
      {
        id: 10,
        type: "Application",
        question: "A computer needs to access a specific memory location. Which bus would carry this information?",
        options: ["Data bus", "Address bus", "Control bus", "Power bus"],
        correct: 1,
        explanation: "The address bus carries memory addresses to specify which location to access."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why is the motherboard called the backbone of the computer?",
        options: ["Because it's expensive", "Because it connects all components", "Because it's large", "Because it's heavy"],
        correct: 1,
        explanation: "The motherboard is called the backbone because it connects and provides communication between all computer components."
      },
      {
        id: 12,
        type: "Understanding",
        question: "How does the data bus width affect computer performance?",
        options: ["It doesn't affect performance", "Wider bus means better performance", "Narrower bus means better performance", "Bus width doesn't matter"],
        correct: 1,
        explanation: "A wider data bus can carry more data at once, leading to faster communication and better system performance."
      },
      {
        id: 13,
        type: "Understanding",
        question: "What is the relationship between motherboard and CPU?",
        options: ["They are the same thing", "Motherboard provides the platform for CPU", "CPU controls the motherboard", "They don't work together"],
        correct: 1,
        explanation: "The motherboard provides the platform and connections for the CPU to function properly."
      },
      {
        id: 14,
        type: "Understanding",
        question: "Why do computers need different types of buses?",
        options: ["To look more complex", "To handle different types of data and operations", "To use more electricity", "To be more expensive"],
        correct: 1,
        explanation: "Different buses handle different types of data and operations - data bus for data, address bus for locations, control bus for signals."
      },
      {
        id: 15,
        type: "Understanding",
        question: "How does the motherboard facilitate communication between components?",
        options: ["Through wireless signals", "Through physical and electrical connections", "Through the internet", "Through sound waves"],
        correct: 1,
        explanation: "The motherboard facilitates communication through physical connections (sockets, slots) and electrical pathways (buses)."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If a data bus is 64-bit wide, how many bits can it transfer at once?",
        options: ["32 bits", "64 bits", "128 bits", "256 bits"],
        correct: 1,
        explanation: "A 64-bit data bus can transfer 64 bits of data at once."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A motherboard has 4 RAM slots and each can hold 16GB. What's the maximum RAM capacity?",
        options: ["16GB", "32GB", "64GB", "128GB"],
        correct: 2,
        explanation: "4 RAM slots × 16GB each = 64GB maximum RAM capacity."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If a data bus transfers 8 bytes per clock cycle at 2 GHz, what's the transfer rate?",
        options: ["8 GB/s", "16 GB/s", "32 GB/s", "64 GB/s"],
        correct: 1,
        explanation: "8 bytes × 2 billion cycles per second = 16 billion bytes per second = 16 GB/s."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A motherboard has 6 USB ports and each can transfer 480 Mbps. What's the total USB transfer capacity?",
        options: ["480 Mbps", "2.88 Gbps", "6 Gbps", "480 Gbps"],
        correct: 1,
        explanation: "6 USB ports × 480 Mbps each = 2,880 Mbps = 2.88 Gbps total capacity."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a 32-bit address bus can address 4GB of memory, how much can a 64-bit address bus address?",
        options: ["8GB", "16GB", "4TB", "16 exabytes"],
        correct: 3,
        explanation: "A 64-bit address bus can address 2^64 bytes = 16 exabytes of memory."
      }
    ]
  },
  "1.5": {
    title: "Memory (Primary and Secondary)",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What is the smallest unit of memory?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        correct: 1,
        explanation: "A bit (binary digit) is the smallest unit of memory, representing 0 or 1."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "How many bits make up 1 byte?",
        options: ["4 bits", "8 bits", "16 bits", "32 bits"],
        correct: 1,
        explanation: "1 byte consists of 8 bits."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        correct: 0,
        explanation: "RAM stands for Random Access Memory."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "What does ROM stand for?",
        options: ["Random Only Memory", "Read Only Memory", "Random Output Memory", "Read Output Memory"],
        correct: 1,
        explanation: "ROM stands for Read Only Memory."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "Which type of memory is volatile?",
        options: ["RAM", "ROM", "Hard Disk", "SSD"],
        correct: 0,
        explanation: "RAM is volatile memory - it loses data when power is turned off."
      },
      {
        id: 6,
        type: "Application",
        question: "A user wants to store a 2GB video file permanently. Which storage device would be best?",
        options: ["RAM", "ROM", "Hard Disk Drive", "Cache"],
        correct: 2,
        explanation: "A Hard Disk Drive is ideal for permanent storage of large files like videos."
      },
      {
        id: 7,
        type: "Application",
        question: "Which memory type would be used to store the computer's startup instructions?",
        options: ["RAM", "ROM", "Hard Disk", "Cache"],
        correct: 1,
        explanation: "ROM stores permanent instructions like the computer's startup process (BIOS)."
      },
      {
        id: 8,
        type: "Application",
        question: "A gamer wants faster loading times. Which storage upgrade would help most?",
        options: ["More RAM", "Larger Hard Disk", "SSD", "More Cache"],
        correct: 2,
        explanation: "An SSD (Solid State Drive) provides much faster read/write speeds than traditional hard disks."
      },
      {
        id: 9,
        type: "Application",
        question: "Which memory type would be used to temporarily store frequently accessed data?",
        options: ["RAM", "ROM", "Cache", "Hard Disk"],
        correct: 2,
        explanation: "Cache memory stores frequently accessed data for faster CPU access."
      },
      {
        id: 10,
        type: "Application",
        question: "A user needs to transfer files between computers. Which storage device would be most portable?",
        options: ["Hard Disk", "SSD", "USB Flash Drive", "RAM"],
        correct: 2,
        explanation: "USB Flash Drives are portable and ideal for transferring files between computers."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why do computers need both primary and secondary memory?",
        options: ["To look more expensive", "To store different types of data", "To balance speed and capacity", "To use more electricity"],
        correct: 2,
        explanation: "Primary memory (RAM) is fast but limited, while secondary memory (HDD/SSD) provides large capacity. Together they balance speed and storage needs."
      },
      {
        id: 12,
        type: "Understanding",
        question: "What is the difference between volatile and non-volatile memory?",
        options: ["Volatile is faster", "Volatile loses data when power is off", "Non-volatile is cheaper", "There is no difference"],
        correct: 1,
        explanation: "Volatile memory (like RAM) loses data when power is turned off, while non-volatile memory (like ROM, HDD) retains data."
      },
      {
        id: 13,
        type: "Understanding",
        question: "How does cache memory improve computer performance?",
        options: ["It stores more data", "It's cheaper", "It provides faster access to frequently used data", "It uses less power"],
        correct: 2,
        explanation: "Cache memory provides faster access to frequently used data, reducing the time the CPU waits for data from slower RAM."
      },
      {
        id: 14,
        type: "Understanding",
        question: "Why is RAM called 'random access' memory?",
        options: ["Because it's expensive", "Because data can be accessed from any location equally fast", "Because it's random", "Because it's temporary"],
        correct: 1,
        explanation: "RAM is called 'random access' because data can be read from or written to any location equally fast, regardless of the data's physical location."
      },
      {
        id: 15,
        type: "Understanding",
        question: "What is the relationship between memory capacity and computer performance?",
        options: ["More memory always means better performance", "Memory capacity affects how many programs can run simultaneously", "Memory doesn't affect performance", "Less memory means better performance"],
        correct: 1,
        explanation: "Memory capacity affects how many programs can run simultaneously and how much data can be processed at once."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If 1 character = 1 byte, how many characters can be stored in 1MB?",
        options: ["1,000 characters", "1,024 characters", "1,048,576 characters", "1,000,000 characters"],
        correct: 2,
        explanation: "1MB = 1,048,576 bytes, so it can store 1,048,576 characters (1 character = 1 byte)."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A computer has 8GB RAM and 1TB storage. If 2GB of data is being processed, where would it be stored?",
        options: ["Only in RAM", "Only in storage", "In both RAM and storage", "In neither RAM nor storage"],
        correct: 0,
        explanation: "Data being actively processed is stored in RAM for fast access, not in secondary storage."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If a hard disk spins at 7200 RPM, how many rotations per second?",
        options: ["120 rotations", "7200 rotations", "60 rotations", "3600 rotations"],
        correct: 0,
        explanation: "7200 RPM ÷ 60 seconds = 120 rotations per second."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A computer has 16GB RAM and is running 4 applications that each use 2GB. How much RAM is still available?",
        options: ["8GB", "4GB", "0GB", "16GB"],
        correct: 0,
        explanation: "4 applications × 2GB each = 8GB used. 16GB total - 8GB used = 8GB available."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a DVD can store 4.7GB and a CD can store 700MB, how many CDs equal one DVD?",
        options: ["About 6 CDs", "About 7 CDs", "About 8 CDs", "About 9 CDs"],
        correct: 1,
        explanation: "4.7GB = 4,700MB. 4,700MB ÷ 700MB = 6.7, so about 7 CDs equal one DVD."
      }
    ]
  },
  "1.6": {
    title: "Output Devices",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What is the main function of output devices?",
        options: ["To input data", "To process data", "To present processed data", "To store data"],
        correct: 2,
        explanation: "Output devices present processed data in a meaningful format to users."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "What does VDU stand for?",
        options: ["Video Display Unit", "Visual Display Unit", "Video Data Unit", "Visual Data Unit"],
        correct: 1,
        explanation: "VDU stands for Visual Display Unit, which refers to monitors."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "What does LCD stand for?",
        options: ["Liquid Crystal Display", "Light Crystal Display", "Liquid Color Display", "Light Color Display"],
        correct: 0,
        explanation: "LCD stands for Liquid Crystal Display."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "What does LED stand for?",
        options: ["Light Emitting Diode", "Liquid Emitting Display", "Light Electronic Display", "Liquid Electronic Display"],
        correct: 0,
        explanation: "LED stands for Light Emitting Diode."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "What does HDMI stand for?",
        options: ["High Definition Multimedia Interface", "High Data Multimedia Interface", "High Definition Media Interface", "High Data Media Interface"],
        correct: 0,
        explanation: "HDMI stands for High Definition Multimedia Interface."
      },
      {
        id: 6,
        type: "Application",
        question: "A teacher wants to show a presentation to a large class. Which output device would be best?",
        options: ["Monitor", "Printer", "Projector", "Speaker"],
        correct: 2,
        explanation: "A projector can display content on a large screen, making it visible to a large audience."
      },
      {
        id: 7,
        type: "Application",
        question: "A user needs to print 1000 pages quickly. Which printer type would be most suitable?",
        options: ["Inkjet printer", "Laser printer", "Dot matrix printer", "3D printer"],
        correct: 1,
        explanation: "Laser printers are designed for high-volume printing and are much faster than other printer types."
      },
      {
        id: 8,
        type: "Application",
        question: "Which port would be used to connect a computer to a high-definition TV?",
        options: ["USB port", "VGA port", "HDMI port", "Ethernet port"],
        correct: 2,
        explanation: "HDMI ports are designed for high-definition audio and video transmission to devices like TVs."
      },
      {
        id: 9,
        type: "Application",
        question: "A designer needs to print high-quality photos. Which printer would be best?",
        options: ["Laser printer", "Inkjet printer", "Dot matrix printer", "3D printer"],
        correct: 1,
        explanation: "Inkjet printers are excellent for high-quality photo printing due to their ability to produce detailed color images."
      },
      {
        id: 10,
        type: "Application",
        question: "Which output device would be used to create a physical 3D model?",
        options: ["Monitor", "Printer", "3D printer", "Speaker"],
        correct: 2,
        explanation: "3D printers create physical three-dimensional objects by building them layer by layer."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why are LED monitors preferred over LCD monitors?",
        options: ["They are cheaper", "They are more energy efficient and provide better image quality", "They are larger", "They are older technology"],
        correct: 1,
        explanation: "LED monitors are more energy efficient, lighter, thinner, and provide better image quality compared to traditional LCD monitors."
      },
      {
        id: 12,
        type: "Understanding",
        question: "What is the difference between impact and non-impact printers?",
        options: ["Impact printers are cheaper", "Impact printers physically strike the paper", "Non-impact printers are faster", "There is no difference"],
        correct: 1,
        explanation: "Impact printers (like dot matrix) physically strike the paper, while non-impact printers (like laser and inkjet) don't."
      },
      {
        id: 13,
        type: "Understanding",
        question: "How do speakers convert digital signals to sound?",
        options: ["They don't convert signals", "They use electromagnetic coils to move air", "They use light", "They use heat"],
        correct: 1,
        explanation: "Speakers use electromagnetic coils to move a diaphragm, which creates sound waves by moving air."
      },
      {
        id: 14,
        type: "Understanding",
        question: "Why do computers need different types of ports?",
        options: ["To look more complex", "To connect different types of devices with different requirements", "To use more electricity", "To be more expensive"],
        correct: 1,
        explanation: "Different devices have different requirements - some need high-speed data transfer, others need audio/video signals, etc."
      },
      {
        id: 15,
        type: "Understanding",
        question: "What is the advantage of using a 3D printer over traditional manufacturing?",
        options: ["It's always cheaper", "It provides unparalleled flexibility and customization", "It's faster", "It uses less material"],
        correct: 1,
        explanation: "3D printers offer unparalleled flexibility and customization options for creating objects with complex details."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If a monitor has a resolution of 1920x1080, how many pixels does it display?",
        options: ["2,073,600 pixels", "1,920 pixels", "1,080 pixels", "3,000 pixels"],
        correct: 0,
        explanation: "1920 × 1080 = 2,073,600 pixels."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A laser printer prints at 30 pages per minute. How long to print 150 pages?",
        options: ["3 minutes", "5 minutes", "10 minutes", "15 minutes"],
        correct: 1,
        explanation: "150 pages ÷ 30 pages per minute = 5 minutes."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If HDMI transfers 18 Gbps, how many GB per second?",
        options: ["2.25 GB/s", "18 GB/s", "1.8 GB/s", "225 GB/s"],
        correct: 0,
        explanation: "18 Gbps ÷ 8 bits per byte = 2.25 GB/s."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A speaker has a frequency range of 20Hz-20kHz. How many octaves is this?",
        options: ["10 octaves", "20 octaves", "30 octaves", "40 octaves"],
        correct: 0,
        explanation: "Each octave doubles the frequency. 20Hz to 20kHz covers 10 octaves (20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480)."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a 3D printer builds at 0.1mm layers and needs to create a 10cm object, how many layers?",
        options: ["100 layers", "1,000 layers", "10,000 layers", "100,000 layers"],
        correct: 1,
        explanation: "10cm = 100mm. 100mm ÷ 0.1mm per layer = 1,000 layers."
      }
    ]
  },
  "1.7": {
    title: "Computer Software",
    questions: [
      {
        id: 1,
        type: "Knowledge",
        question: "What is computer software?",
        options: ["Hardware components", "A set of instructions and programs", "Physical parts", "Electrical circuits"],
        correct: 1,
        explanation: "Computer software is a set of instructions, programs, or data that enable a computer to perform specific tasks."
      },
      {
        id: 2,
        type: "Knowledge",
        question: "What are the two main types of computer software?",
        options: ["Hardware and Software", "System and Application", "Input and Output", "Primary and Secondary"],
        correct: 1,
        explanation: "The two main types are System software and Application software."
      },
      {
        id: 3,
        type: "Knowledge",
        question: "What is open source software?",
        options: ["Expensive software", "Software with publicly accessible source code", "Hardware", "Operating system"],
        correct: 1,
        explanation: "Open source software allows its source code to be publicly accessible, viewed, modified, and used freely."
      },
      {
        id: 4,
        type: "Knowledge",
        question: "What is proprietary software?",
        options: ["Free software", "Software that doesn't allow public access to source code", "Hardware", "System software"],
        correct: 1,
        explanation: "Proprietary software doesn't allow its source code to be accessed by others except the creator or authorized organization."
      },
      {
        id: 5,
        type: "Knowledge",
        question: "What is firmware?",
        options: ["Hardware", "Software permanently stored in hardware", "Application software", "Operating system"],
        correct: 1,
        explanation: "Firmware is software that is permanently stored in hardware devices to control and operate them."
      },
      {
        id: 6,
        type: "Application",
        question: "A user wants to write a document. Which type of software would they use?",
        options: ["Operating system", "Word processor", "Database", "Web browser"],
        correct: 1,
        explanation: "A word processor is application software designed specifically for creating and editing documents."
      },
      {
        id: 7,
        type: "Application",
        question: "Which software type manages computer hardware and provides a platform for other software?",
        options: ["Application software", "System software", "Utility software", "Game software"],
        correct: 1,
        explanation: "System software (like operating systems) manages hardware and provides a platform for other software to run."
      },
      {
        id: 8,
        type: "Application",
        question: "A company needs software specifically for their business processes. Which type would be best?",
        options: ["Packaged software", "Customized software", "Open source software", "System software"],
        correct: 1,
        explanation: "Customized software is designed specifically for an organization's unique requirements and business processes."
      },
      {
        id: 9,
        type: "Application",
        question: "Which software would be used to browse the internet?",
        options: ["Word processor", "Web browser", "Database", "Operating system"],
        correct: 1,
        explanation: "A web browser is application software designed specifically for accessing and browsing the internet."
      },
      {
        id: 10,
        type: "Application",
        question: "A user wants to edit photos. Which type of software would they use?",
        options: ["Spreadsheet", "Photo editing software", "Database", "Web browser"],
        correct: 1,
        explanation: "Photo editing software is application software designed specifically for editing and manipulating images."
      },
      {
        id: 11,
        type: "Understanding",
        question: "Why do computers need both system and application software?",
        options: ["To look more expensive", "System software provides the foundation, application software provides specific functions", "To use more electricity", "To be more complex"],
        correct: 1,
        explanation: "System software provides the foundation and platform, while application software provides specific functions for users."
      },
      {
        id: 12,
        type: "Understanding",
        question: "What is the difference between mobile apps and web applications?",
        options: ["Mobile apps are always better", "Mobile apps are installed on devices, web apps run in browsers", "Web apps are always free", "There is no difference"],
        correct: 1,
        explanation: "Mobile apps are installed on devices, while web applications run in web browsers and don't need installation."
      },
      {
        id: 13,
        type: "Understanding",
        question: "Why is open source software beneficial?",
        options: ["It's always free", "It allows collaboration and customization", "It's always better", "It's always faster"],
        correct: 1,
        explanation: "Open source software allows collaboration, customization, and community improvement of the code."
      },
      {
        id: 14,
        type: "Understanding",
        question: "How does system software act as a bridge between users and computers?",
        options: ["It doesn't act as a bridge", "It provides an interface and manages resources", "It only manages hardware", "It only runs applications"],
        correct: 1,
        explanation: "System software provides an interface for users and manages hardware resources, acting as a bridge between users and the computer."
      },
      {
        id: 15,
        type: "Understanding",
        question: "What is the advantage of web applications over traditional desktop applications?",
        options: ["They are always faster", "They can be used on any device with a web browser", "They are always free", "They don't need internet"],
        correct: 1,
        explanation: "Web applications can be used on any device with a web browser and internet connection, providing cross-platform accessibility."
      },
      {
        id: 16,
        type: "Higher Ability",
        question: "If a software program has 1 million lines of code and each line takes 1 byte, how much storage does the source code need?",
        options: ["1MB", "1KB", "1GB", "1TB"],
        correct: 0,
        explanation: "1 million lines × 1 byte per line = 1 million bytes = 1MB."
      },
      {
        id: 17,
        type: "Higher Ability",
        question: "A computer has 8GB RAM and the operating system uses 2GB. How much RAM is available for applications?",
        options: ["6GB", "8GB", "2GB", "10GB"],
        correct: 0,
        explanation: "8GB total - 2GB for OS = 6GB available for applications."
      },
      {
        id: 18,
        type: "Higher Ability",
        question: "If a web app loads in 2 seconds on a 10 Mbps connection, how long on a 5 Mbps connection?",
        options: ["1 second", "2 seconds", "4 seconds", "5 seconds"],
        correct: 2,
        explanation: "Half the speed means double the time: 2 seconds × 2 = 4 seconds."
      },
      {
        id: 19,
        type: "Higher Ability",
        question: "A mobile app uses 50MB of storage and 100MB of RAM. How many such apps can run on a device with 2GB RAM?",
        options: ["10 apps", "20 apps", "40 apps", "50 apps"],
        correct: 1,
        explanation: "2GB = 2,048MB. 2,048MB ÷ 100MB per app = 20.48, so 20 apps can run simultaneously."
      },
      {
        id: 20,
        type: "Higher Ability",
        question: "If a software update is 500MB and downloads at 2MB/s, how long to download?",
        options: ["2.5 minutes", "4.2 minutes", "5 minutes", "10 minutes"],
        correct: 1,
        explanation: "500MB ÷ 2MB/s = 250 seconds = 4.2 minutes."
      }
    ]
  }
};

// Simple quiz system
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = {};

function startQuiz(topicId) {
  if (mcqData[topicId]) {
    currentQuiz = {
      id: topicId,
      title: mcqData[topicId].title,
      questions: mcqData[topicId].questions
    };
  } else {
    // Fallback for certification quiz
    currentQuiz = {
      id: topicId,
      title: "Certification Exam",
      questions: generateCertificationQuestions()
    };
  }
  
  currentQuestionIndex = 0;
  userAnswers = {};
  showQuestion(0);
}

function showQuestion(questionIndex) {
  const question = currentQuiz.questions[questionIndex];
  const container = document.getElementById('quizContainer');
  
  container.innerHTML = `
    <div class="card">
      <div class="card-header bg-primary text-white">
        <h5 class="card-title mb-0">Question ${questionIndex + 1} of ${currentQuiz.questions.length}</h5>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <span class="badge bg-secondary">${question.type}</span>
        </div>
        <h6 class="card-title">${question.question}</h6>
        
        <div class="mt-3">
          ${question.options.map((option, index) => `
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" name="question${question.id}" id="option${index}" value="${index}" onchange="enableNextButton()">
              <label class="form-check-label" for="option${index}">
                ${option}
              </label>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-4 d-flex justify-content-between">
          <button class="btn btn-secondary" onclick="showTopicMCQ('${currentQuiz.id}')" ${questionIndex === 0 ? 'disabled' : ''}>
            Previous
          </button>
          <button class="btn btn-primary" onclick="nextQuestion(${questionIndex})" id="nextBtn" disabled>
            ${questionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function enableNextButton() {
  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function nextQuestion(questionIndex) {
  // Save current answer
  const selectedOption = document.querySelector(`input[name="question${currentQuiz.questions[questionIndex].id}"]:checked`);
  if (!selectedOption) {
    alert('Please select an answer before proceeding.');
    return;
  }
  
  userAnswers[currentQuiz.questions[questionIndex].id] = parseInt(selectedOption.value);
  
  if (questionIndex === currentQuiz.questions.length - 1) {
    showResults();
  } else {
    currentQuestionIndex = questionIndex + 1;
    showQuestion(currentQuestionIndex);
  }
}

function showResults() {
  const totalQuestions = currentQuiz.questions.length;
  const correctAnswers = Object.values(userAnswers).filter(answer => answer !== undefined).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  let grade, gradeClass;
  if (percentage >= 90) {
    grade = "A+";
    gradeClass = "text-success";
  } else if (percentage >= 80) {
    grade = "A";
    gradeClass = "text-success";
  } else if (percentage >= 70) {
    grade = "B";
    gradeClass = "text-primary";
  } else if (percentage >= 60) {
    grade = "C";
    gradeClass = "text-warning";
  } else {
    grade = "F";
    gradeClass = "text-danger";
  }

  const container = document.getElementById('quizContainer');
  
  // Special handling for certification exam
  if (currentQuiz.id === 'certification') {
    if (percentage >= 90) {
      container.innerHTML = `
        <div class="card">
          <div class="card-header bg-success text-white">
            <h5 class="card-title mb-0">🎉 Congratulations! You've Earned Your Certificate!</h5>
          </div>
          <div class="card-body text-center">
            <div class="alert alert-success">
              <h4>🏆 Computer Systems Certification</h4>
              <p class="mb-0">You have successfully completed the Computer Systems certification exam with a score of <strong>${percentage}%</strong>!</p>
            </div>
            
            <div class="row text-center mb-4">
              <div class="col-md-3">
                <h3 class="text-primary">${correctAnswers}/100</h3>
                <p class="text-muted">Correct Answers</p>
              </div>
              <div class="col-md-3">
                <h3 class="text-success">${percentage}%</h3>
                <p class="text-muted">Score</p>
              </div>
              <div class="col-md-3">
                <h3 class="text-warning">${grade}</h3>
                <p class="text-muted">Grade</p>
              </div>
              <div class="col-md-3">
                <h3 class="text-info">${100 - correctAnswers}</h3>
                <p class="text-muted">Incorrect</p>
              </div>
            </div>

            <div class="d-flex gap-2 justify-content-center">
              <button class="btn btn-success btn-lg" onclick="printCertificate()">📄 Print Certificate</button>
              <button class="btn btn-primary" onclick="showQuizIntro()">Take Another Quiz</button>
              <button class="btn btn-secondary" onclick="showMainPage()">Back to Main Page</button>
            </div>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="card">
          <div class="card-header bg-warning text-dark">
            <h5 class="card-title mb-0">📚 Keep Learning!</h5>
          </div>
          <div class="card-body text-center">
            <div class="alert alert-warning">
              <h4>Certification Not Yet Achieved</h4>
              <p class="mb-0">You scored <strong>${percentage}%</strong>, but you need <strong>90% or above</strong> to earn your certificate. Keep studying and try again!</p>
            </div>
            
            <div class="row text-center mb-4">
              <div class="col-md-3">
                <h3 class="text-primary">${correctAnswers}/100</h3>
                <p class="text-muted">Correct Answers</p>
              </div>
              <div class="col-md-3">
                <h3 class="text-warning">${percentage}%</h3>
                <p class="text-muted">Score</p>
              </div>
              <div class="col-md-3">
                <h3 class="text-warning">${grade}</h3>
                <p class="text-muted">Grade</p>
              </div>
              <div class="col-md-3">
                <h3 class="text-info">${100 - correctAnswers}</h3>
                <p class="text-muted">Incorrect</p>
              </div>
            </div>

            <div class="d-flex gap-2 justify-content-center">
              <button class="btn btn-warning" onclick="showCertificationIntro()">Try Certification Again</button>
              <button class="btn btn-primary" onclick="showQuizIntro()">Practice with Topic Quizzes</button>
              <button class="btn btn-secondary" onclick="showMainPage()">Back to Main Page</button>
            </div>
          </div>
        </div>
      `;
    }
  } else {
    // Regular quiz results
    container.innerHTML = `
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title mb-0">Quiz Results</h5>
        </div>
        <div class="card-body">
          <div class="row text-center mb-4">
            <div class="col-md-3">
              <h3 class="text-primary">${correctAnswers}/${totalQuestions}</h3>
              <p class="text-muted">Correct Answers</p>
            </div>
            <div class="col-md-3">
              <h3 class="text-success">${percentage}%</h3>
              <p class="text-muted">Score</p>
            </div>
            <div class="col-md-3">
              <h3 class="text-warning">${grade}</h3>
              <p class="text-muted">Grade</p>
            </div>
            <div class="col-md-3">
              <h3 class="text-info">${totalQuestions - correctAnswers}</h3>
              <p class="text-muted">Incorrect</p>
            </div>
          </div>

          <div class="d-flex gap-2 justify-content-center">
            <button class="btn btn-primary" onclick="showTopicMCQ('${currentQuiz.id}')">Take Another Quiz</button>
            <button class="btn btn-secondary" onclick="showQuizIntro()">View All Quizzes</button>
            <button class="btn btn-secondary" onclick="showMainPage()">Back to Main Page</button>
          </div>
        </div>
      </div>
    `;
  }
}

// Function to print certificate
function printCertificate() {
  const certificateWindow = window.open('', '_blank');
  const currentDate = new Date().toLocaleDateString();
  
  certificateWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Computer Systems Certification</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; text-align: center; }
        .certificate { border: 3px solid #gold; padding: 40px; max-width: 800px; margin: 0 auto; }
        .header { font-size: 36px; color: #2c3e50; margin-bottom: 20px; }
        .subheader { font-size: 18px; color: #7f8c8d; margin-bottom: 40px; }
        .content { font-size: 16px; line-height: 1.6; margin-bottom: 40px; }
        .signature { margin-top: 60px; }
        .date { margin-top: 40px; color: #7f8c8d; }
        @media print { body { margin: 0; } .certificate { border: none; } }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="header">🏆 Computer Systems Certification</div>
        <div class="subheader">Certificate of Completion</div>
        <div class="content">
          This is to certify that the student has successfully completed the Computer Systems course 
          and passed the comprehensive certification examination with a score of 90% or above.
          <br><br>
          The student has demonstrated proficiency in:
          <ul style="text-align: left; display: inline-block;">
            <li>Introduction to Computer Systems</li>
            <li>Input and Output Devices</li>
            <li>Central Processing Unit (CPU)</li>
            <li>Motherboard and Data Bus</li>
            <li>Memory Systems</li>
            <li>Computer Software</li>
          </ul>
        </div>
        <div class="signature">
          <strong>Date:</strong> ${currentDate}<br>
          <strong>Course:</strong> Class 9 Computer Systems<br>
          <strong>Status:</strong> ✅ Certified
        </div>
      </div>
    </body>
    </html>
  `);
  
  certificateWindow.document.close();
  certificateWindow.print();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing page...');
  
  // Initialize DOM element variables
  topicsNav = document.getElementById("topicsNav");
  contentInner = document.getElementById("contentInner");
  searchInput = document.getElementById("searchInput");
  sidebar = document.getElementById("sidebar");
  sidebarToggle = document.getElementById("sidebarToggle");
  
  console.log('DOM elements found:', {
    topicsNav: topicsNav,
    contentInner: contentInner,
    searchInput: searchInput,
    sidebar: sidebar,
    sidebarToggle: sidebarToggle
  });
  
  try {
    // Build sidebar
    console.log('Building sidebar...');
    if (topicsNav) {
      buildSidebar();
      console.log('Sidebar built successfully');
    } else {
      console.error('topicsNav element not found!');
    }
    
    // Set up event listeners
    console.log('Setting up event listeners...');
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch);
      console.log('Search input listener added');
    } else {
      console.warn('Search input element not found');
    }
    
    window.addEventListener('hashchange', openFromHash);
    console.log('Hash change listener added');
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        const hidden = sidebar.classList.contains('d-none');
        if (hidden) showSidebarMobile(); else hideSidebarMobile();
      });
      console.log('Sidebar toggle listener added');
    } else {
      console.warn('Sidebar toggle element not found');
    }
    
    // Load deep link if present
    console.log('Checking for deep links...');
    openFromHash();
    
    console.log('Page initialization complete!');
  } catch (error) {
    console.error('Error during page initialization:', error);
    // Show error message to user
    if (contentInner) {
      contentInner.innerHTML = `
        <div class="alert alert-danger">
          <h4>Error Loading Page</h4>
          <p>There was an error loading the page content. Please refresh the page or check the browser console for details.</p>
          <p><strong>Error:</strong> ${error.message}</p>
        </div>
      `;
    }
  }
});
