<?php
header("Access-Control-Allow-Origin: *");
$server = $_GET['server'];
$conn = @ftp_connect($server, 21, 10);
if ($conn) {
    echo "✅ FTP server $server is reachable.";
    ftp_close($conn);
} else {
    echo "❌ Unable to connect to FTP server $server.";
}
?>

